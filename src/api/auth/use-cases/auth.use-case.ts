import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from 'src/core/user/services/user.service';
import { Transactional } from 'typeorm-transactional';
import { JwtHelper } from '../helpers/jwt.helpers';
import { LogInAuthDto, SingUpAuthDto, TokenResponseDto } from '../dtos';
import { verify } from 'argon2';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { UserEntity } from 'src/core/user/entities';
import { TokenPayloadDto } from 'src/shared/dtos';
@Injectable()
export class AuthUseCase {
  constructor(
    @InjectMapper()
    private readonly mapper: Mapper,
    private readonly userService: UserService,
    private readonly jwtHelper: JwtHelper,
  ) {}

  @Transactional()
  public async createUser(payload: SingUpAuthDto): Promise<TokenResponseDto> {
    const { phone } = payload;
    const userIsActivated = await this.userService.findByPhone(phone);
    if (userIsActivated) {
      throw new BadRequestException('Пользователь уже существует');
    }
    await this.userService.createUser(payload);
    const user = await this.userService.findByPhone(phone);
    const tokenPayload = this.mapper.map(user, UserEntity, TokenPayloadDto);

    const token = await this.jwtHelper.create(tokenPayload);
    return { token };
  }

  @Transactional()
  public async loginUser(payload: LogInAuthDto): Promise<TokenResponseDto> {
    const { phone, password } = payload;
    const userIsActive = await this.userService.findByPhone(phone);
    if (!userIsActive) {
      throw new BadRequestException('Неверный логин или пароль');
    }
    if (await verify(userIsActive.password, password)) {
      const tokenPayload = this.mapper.map(
        userIsActive,
        UserEntity,
        TokenPayloadDto,
      );
      const token = await this.jwtHelper.create(tokenPayload);
      return { token };
    } else {
      throw new BadRequestException('Неверный логин или пароль');
    }
  }
}

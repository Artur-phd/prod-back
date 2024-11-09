import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEnums } from 'src/shared/enums';
import { hash } from 'argon2';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  public async createUser(payload): Promise<boolean> {
    try {
      const password = await hash(payload.password);
      const newUser = await this.userRepository.create({
        ...payload,
        password,
        role: UserEnums.RoleEnum.USER,
      });
      await this.userRepository.insert(newUser);
      return true;
    } catch (error) {
      throw new BadRequestException(
        'Ошибка при создании пользователя - повторите позже',
      );
    }
  }

  public async findById(id: number): Promise<UserEntity> | null {
    return await this.userRepository.findOne({ where: { id } });
  }

  public async findByPhone(phone: string): Promise<UserEntity> | null {
    return await this.userRepository.findOne({ where: { phone } });
  }
}

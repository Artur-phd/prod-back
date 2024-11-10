import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CurrentUser } from 'src/api/auth/decorators';
import { Route } from 'src/shared/decorators';
import { TokenPayloadDto } from 'src/shared/dtos';
import { UserEnums } from 'src/shared/enums';
import { HttpMethodEnum } from 'src/shared/enums/app';
import { UserUseCase } from '../use-cases';

@ApiTags('user')
@Controller('user')
export class UserHttpController {
  constructor(private readonly userUseCse: UserUseCase) {}

  @Route({
    title: 'Get my profile',
    description: 'dss',
    method: HttpMethodEnum.GET,
    roles: [UserEnums.RoleEnum.USER],
  })
  public async getMyProfile(
    @CurrentUser() user: TokenPayloadDto,
  ): Promise<TokenPayloadDto> {
    return user;
  }
}

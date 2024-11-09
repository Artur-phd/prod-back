import { AutoMap } from '@automapper/classes';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { UserEnums } from 'src/shared/enums';

export class SingUpAuthDto {
  @AutoMap()
  @IsString()
  phone: string;

  @AutoMap()
  @IsString()
  password: string;

  @AutoMap()
  @IsString()
  firstName: string;

  @AutoMap()
  @IsString()
  lastName: string;

  @AutoMap()
  @IsEnum(UserEnums.RoleEnum)
  @IsOptional()
  role?: UserEnums.RoleEnum = UserEnums.RoleEnum.USER;
}

export class LogInAuthDto {
  @IsString()
  phone: string;

  @IsString()
  password: string;
}

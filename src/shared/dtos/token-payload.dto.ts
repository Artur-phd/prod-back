import { AutoMap } from '@automapper/classes';
import { UserEnums } from '../enums';
import {
  IsEmail,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class TokenPayloadDto {
  @AutoMap()
  @IsNumber()
  id: number;

  @AutoMap()
  @IsEmail()
  phone: string;

  @AutoMap()
  @IsString()
  firstName: string;

  @AutoMap()
  @IsString()
  lastName: string;

  @AutoMap()
  @IsEnum(UserEnums.RoleEnum)
  @IsOptional()
  role?: UserEnums.RoleEnum;
}

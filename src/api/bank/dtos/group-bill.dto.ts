import { IsString } from 'class-validator';

export class CreateBillDto {
  @IsString()
  title: string;
}

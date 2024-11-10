import { Injectable } from '@nestjs/common';
import { SingUpAuthDto } from 'src/api/auth/dtos';

@Injectable()
export class UserUseCase {
  constructor() {}

  public async test1() {
    return 1;
  }
}

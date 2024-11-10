import { Injectable } from '@nestjs/common';

@Injectable()
export class UserUseCase {
  constructor() {}

  public async test1() {
    return 1;
  }
}

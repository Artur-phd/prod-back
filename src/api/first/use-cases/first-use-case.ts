import { Injectable } from '@nestjs/common';

@Injectable()
export class FirstUseCase {
  constructor() {}

  public testContinue() {
    return 'completed';
  }
}

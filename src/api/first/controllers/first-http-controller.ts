import { Controller, Get } from '@nestjs/common';
import { FirstUseCase } from '../use-cases';

@Controller('first')
export class FirstHttpController {
  constructor(private readonly firstUseCase: FirstUseCase) {}
  @Get()
  public test() {
    return this.firstUseCase.testContinue();
  }
}

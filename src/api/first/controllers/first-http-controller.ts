import { Controller, Get, Render } from '@nestjs/common';
import { FirstUseCase } from '../use-cases';

@Controller('first')
export class FirstHttpController {
  constructor(private readonly firstUseCase: FirstUseCase) {}
  @Get()
  @Render('index')
  public test() {
    return this.firstUseCase.testContinue();
  }
}

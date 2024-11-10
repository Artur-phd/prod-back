import { Controller, Render } from '@nestjs/common';
import { FirstUseCase } from '../use-cases';
import { HttpMethodEnum } from 'src/shared/enums/app';
import { Route } from 'src/shared/decorators';

@Controller('first')
export class FirstHttpController {
  constructor(private readonly firstUseCase: FirstUseCase) {}
  @Route({
    title: 'ds',
    method: HttpMethodEnum.GET,
  })
  @Render('index')
  public test() {
    return this.firstUseCase.testContinue();
  }
}

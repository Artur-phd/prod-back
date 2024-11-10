import { Body, Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateBillDto } from '../dtos';
import { GroupBillUseCase } from '../use-cases';
import { Route } from 'src/shared/decorators';
import { HttpMethodEnum } from 'src/shared/enums/app';
import { UserEnums } from 'src/shared/enums';
import { CurrentUser } from 'src/api/auth/decorators';
import { TokenPayloadDto } from 'src/shared/dtos';

@ApiTags('groupbill')
@Controller('groupbill')
export class GroupBillHttpController {
  constructor(private readonly groupBillService: GroupBillUseCase) {}

  @Route({
    title: 'Create bill',
    method: HttpMethodEnum.POST,
    roles: [UserEnums.RoleEnum.USER],
  })
  public async createBill(
    @Body() body: CreateBillDto,
    @CurrentUser() user: TokenPayloadDto,
  ) {
    return await this.groupBillService.createBill(body, user.id);
  }
}

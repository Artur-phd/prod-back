import { Injectable } from '@nestjs/common';
import { GroupBillService } from 'src/core/bank/services';
import { CreateBillDto } from '../dtos';

@Injectable()
export class GroupBillUseCase {
  constructor(private readonly groupBillService: GroupBillService) {}

  public async createBill(payload: CreateBillDto, id: number) {
    return await this.groupBillService.addGroubBill(payload, id);
  }
}

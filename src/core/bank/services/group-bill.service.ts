import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GroupBillEntity } from '../entities';
import { Repository } from 'typeorm';
import { CreateBillDto } from 'src/api/bank/dtos';

@Injectable()
export class GroupBillService {
  constructor(
    @InjectRepository(GroupBillEntity)
    private readonly groupBillRepository: Repository<GroupBillEntity>,
  ) {}

  public async addGroubBill(payload: CreateBillDto, id: number) {
    const { title } = payload;
    const checkCloneByTitle = await this.groupBillRepository.findOne({
      where: { title, id },
    });
    if (checkCloneByTitle) {
      throw new BadRequestException('Счёт с таким названием уже существует');
    }
    const newBill = this.groupBillRepository.create({
      ...payload,
      owner_id: id,
    });
    await this.groupBillRepository.insert(newBill);
    throw new HttpException('Completed', 201);
  }
}

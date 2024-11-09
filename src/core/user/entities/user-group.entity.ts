import {
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';
import { GroupBillEntity } from 'src/core/bank/entities';

@Entity({ name: 'user-group' })
export class UserGroupEntity {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id: number;

  // Relations

  @ManyToOne(() => UserEntity, (user) => user.id, {
    nullable: true,
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({
    name: 'user_id',
  })
  userId: UserEntity;

  @OneToOne(() => GroupBillEntity, (groupBill) => groupBill.id, {
    nullable: true,
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({
    name: 'group_bill_id',
  })
  groupBillId: GroupBillEntity;
}

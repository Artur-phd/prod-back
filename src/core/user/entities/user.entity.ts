import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserGroupEntity } from './user-group.entity';
import {
  GroupBillEntity,
  GroupBillTransactionalEntity,
} from 'src/core/bank/entities';
import { UserEnums } from 'src/shared/enums';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id: number;

  @Column({
    name: 'first_name',
    type: 'varchar',
    length: 24,
  })
  firstName: string;

  @Column({
    name: 'last_name',
    type: 'varchar',
    length: 24,
  })
  lastName: string;

  @Column({
    name: 'phone',
    type: 'varchar',
    length: 15,
  })
  phone: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({
    type: 'bool',
    name: 'is_blocked',
    default: false,
    nullable: false,
  })
  isBlocked?: boolean;

  @Column({ type: 'enum', enum: UserEnums.RoleEnum })
  role: UserEnums.RoleEnum;

  // Relations

  @OneToMany(() => UserGroupEntity, (group) => group.userId, {
    nullable: true,
    cascade: false,
  })
  @JoinColumn({
    name: 'group_id',
  })
  userGroup: UserGroupEntity;

  @OneToMany(() => GroupBillEntity, (groupBill) => groupBill.id, {
    nullable: true,
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  groupBillId: number;

  @OneToMany(
    () => GroupBillTransactionalEntity,
    (groupBill) => groupBill.fromUserId,
    {
      nullable: true,
    },
  )
  toUser: GroupBillTransactionalEntity;

  @OneToMany(() => UserEntity, (user) => user.toUser, {
    nullable: true,
  })
  fromUserId: UserEntity;
}

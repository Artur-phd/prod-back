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
import { AutoMap } from '@automapper/classes';

@Entity({ name: 'user' })
export class UserEntity {
  @AutoMap()
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id: number;

  @AutoMap()
  @Column({
    name: 'first_name',
    type: 'varchar',
    length: 24,
  })
  firstName: string;

  @AutoMap()
  @Column({
    name: 'last_name',
    type: 'varchar',
    length: 24,
  })
  lastName: string;

  @AutoMap()
  @Column({
    name: 'phone',
    type: 'varchar',
    length: 15,
  })
  phone: string;

  @AutoMap()
  @Column({ type: 'varchar' })
  password: string;

  @AutoMap()
  @Column({
    type: 'bool',
    name: 'is_blocked',
    default: false,
    nullable: false,
  })
  isBlocked?: boolean;

  @AutoMap()
  @Column({
    type: 'enum',
    enum: UserEnums.RoleEnum,
    default: UserEnums.RoleEnum.USER,
  })
  role: UserEnums.RoleEnum;

  // Relations

  @AutoMap()
  @OneToMany(() => UserGroupEntity, (group) => group.userId, {
    nullable: true,
    cascade: false,
  })
  @JoinColumn({
    name: 'group_id',
  })
  userGroup: UserGroupEntity;

  @AutoMap()
  @OneToMany(() => GroupBillEntity, (groupBill) => groupBill.id, {
    nullable: true,
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  groupBillId: number;

  @AutoMap()
  @OneToMany(
    () => GroupBillTransactionalEntity,
    (groupBill) => groupBill.fromUserId,
    {
      nullable: true,
    },
  )
  toUser: GroupBillTransactionalEntity;

  @AutoMap()
  @OneToMany(() => UserEntity, (user) => user.toUser, {
    nullable: true,
  })
  fromUserId: UserEntity;
}

import { UserEntity, UserGroupEntity } from 'src/core/user/entities';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'group_bill_transactional' })
export class GroupBillTransactionalEntity {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id: number;

  @Column({
    name: 'rate',
    type: 'float',
  })
  rate: number;

  //  Relations

  @OneToMany(() => UserGroupEntity, (group) => group.id, {
    nullable: false,
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({
    name: 'group_id',
  })
  groupId: UserGroupEntity;

  @ManyToOne(() => UserEntity, (user) => user.id, {
    nullable: true,
  })
  @JoinColumn({
    name: 'from_user_id',
  })
  fromUserId: UserEntity;

  @ManyToOne(() => UserEntity, (user) => user.id, {
    nullable: true,
  })
  @JoinColumn({
    name: 'to_user_id',
  })
  toUserId: UserEntity;
}

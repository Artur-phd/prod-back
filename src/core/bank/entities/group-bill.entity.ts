import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { GroupBillTransactionalEntity } from './group-bill-transactional.entity';
import { UserEntity, UserGroupEntity } from 'src/core/user/entities';

@Entity({ name: 'group_bill' })
export class GroupBillEntity {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id: number;

  @Column({
    name: 'title',
    type: 'varchar',
    length: 63,
  })
  title: string;

  // Relations
  @ManyToOne(
    () => GroupBillTransactionalEntity,
    (transactional) => transactional.id,
    {
      nullable: false,
    },
  )
  @JoinColumn({
    name: 'transactional_id',
  })
  transactionalId: GroupBillTransactionalEntity;

  @OneToOne(() => UserGroupEntity, (group) => group.id, {
    nullable: true,
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({
    name: 'user_group_id',
  })
  userGroupId: UserGroupEntity;

  @ManyToOne(() => UserEntity, (user) => user.id, {
    nullable: true,
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({
    name: 'owner_id',
  })
  owner_id;
}

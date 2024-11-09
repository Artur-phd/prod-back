import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1731157590706 implements MigrationInterface {
  name = 'Migrations1731157590706';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "group_bill_transactional" ("id" SERIAL NOT NULL, "rate" double precision NOT NULL, "from_user_id" integer, "to_user_id" integer, CONSTRAINT "PK_2fd8deabaa0e8468d056d4624a4" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "group_bill" ("id" SERIAL NOT NULL, "title" character varying(63) NOT NULL, "transactional_id" integer NOT NULL, "user_group_id" integer, "owner_id" integer, CONSTRAINT "REL_e32ed79228c1afd41397403ae4" UNIQUE ("user_group_id"), CONSTRAINT "PK_22e6869947bd569f2c1cbf5467a" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user-group" ("id" SERIAL NOT NULL, "user_id" integer, "group_bill_id" integer, CONSTRAINT "REL_8f32939beea63e279a635b1ed1" UNIQUE ("group_bill_id"), CONSTRAINT "PK_cb3dae13db05ec80858c85f5d43" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "first_name" character varying(24) NOT NULL, "last_name" character varying(24) NOT NULL, "phone" character varying(15) NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "group_bill_transactional" ADD CONSTRAINT "FK_f7382c80511d0c366da889f191b" FOREIGN KEY ("from_user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "group_bill_transactional" ADD CONSTRAINT "FK_9a7e77dbf7073f477d3373c4974" FOREIGN KEY ("to_user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "group_bill" ADD CONSTRAINT "FK_2fd8deabaa0e8468d056d4624a4" FOREIGN KEY ("transactional_id") REFERENCES "group_bill_transactional"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "group_bill" ADD CONSTRAINT "FK_e32ed79228c1afd41397403ae42" FOREIGN KEY ("user_group_id") REFERENCES "user-group"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "group_bill" ADD CONSTRAINT "FK_af3801599e72bf82d507f304929" FOREIGN KEY ("owner_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "user-group" ADD CONSTRAINT "FK_2d523093809e4f6ca13958f3792" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "user-group" ADD CONSTRAINT "FK_8f32939beea63e279a635b1ed18" FOREIGN KEY ("group_bill_id") REFERENCES "group_bill"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user-group" DROP CONSTRAINT "FK_8f32939beea63e279a635b1ed18"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user-group" DROP CONSTRAINT "FK_2d523093809e4f6ca13958f3792"`,
    );
    await queryRunner.query(
      `ALTER TABLE "group_bill" DROP CONSTRAINT "FK_af3801599e72bf82d507f304929"`,
    );
    await queryRunner.query(
      `ALTER TABLE "group_bill" DROP CONSTRAINT "FK_e32ed79228c1afd41397403ae42"`,
    );
    await queryRunner.query(
      `ALTER TABLE "group_bill" DROP CONSTRAINT "FK_2fd8deabaa0e8468d056d4624a4"`,
    );
    await queryRunner.query(
      `ALTER TABLE "group_bill_transactional" DROP CONSTRAINT "FK_9a7e77dbf7073f477d3373c4974"`,
    );
    await queryRunner.query(
      `ALTER TABLE "group_bill_transactional" DROP CONSTRAINT "FK_f7382c80511d0c366da889f191b"`,
    );
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TABLE "user-group"`);
    await queryRunner.query(`DROP TABLE "group_bill"`);
    await queryRunner.query(`DROP TABLE "group_bill_transactional"`);
  }
}

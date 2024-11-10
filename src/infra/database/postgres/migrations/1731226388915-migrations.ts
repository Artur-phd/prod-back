import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1731226388915 implements MigrationInterface {
  name = 'Migrations1731226388915';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "group_bill" DROP CONSTRAINT "FK_2fd8deabaa0e8468d056d4624a4"`,
    );
    await queryRunner.query(
      `ALTER TABLE "group_bill" ALTER COLUMN "transactional_id" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "role" SET DEFAULT 'user'`,
    );
    await queryRunner.query(
      `ALTER TABLE "group_bill" ADD CONSTRAINT "FK_2fd8deabaa0e8468d056d4624a4" FOREIGN KEY ("transactional_id") REFERENCES "group_bill_transactional"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "group_bill" DROP CONSTRAINT "FK_2fd8deabaa0e8468d056d4624a4"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "role" DROP DEFAULT`,
    );
    await queryRunner.query(
      `ALTER TABLE "group_bill" ALTER COLUMN "transactional_id" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "group_bill" ADD CONSTRAINT "FK_2fd8deabaa0e8468d056d4624a4" FOREIGN KEY ("transactional_id") REFERENCES "group_bill_transactional"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}

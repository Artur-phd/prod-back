import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1731191350893 implements MigrationInterface {
  name = 'Migrations1731191350893';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ADD "password" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "is_blocked" boolean NOT NULL DEFAULT false`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."user_role_enum" AS ENUM('user', 'superadmin')`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "role" "public"."user_role_enum" NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "role"`);
    await queryRunner.query(`DROP TYPE "public"."user_role_enum"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "is_blocked"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
  }
}

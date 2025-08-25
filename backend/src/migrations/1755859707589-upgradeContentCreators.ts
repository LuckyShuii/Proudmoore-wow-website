import { MigrationInterface, QueryRunner } from "typeorm";

export class UpgradeContentCreators1755859707589 implements MigrationInterface {
    name = 'UpgradeContentCreators1755859707589';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "content_creators"
            DROP COLUMN IF EXISTS "twitch_app_access_token",
            DROP COLUMN IF EXISTS "twitch_client_id";
        `);

        await queryRunner.query(`
            ALTER TABLE "content_creators"
            ADD COLUMN IF NOT EXISTS "is_disabled" BOOLEAN NOT NULL DEFAULT false;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "content_creators"
            DROP COLUMN IF EXISTS "is_disabled";
        `);

        await queryRunner.query(`
            ALTER TABLE "content_creators"
            ADD COLUMN IF NOT EXISTS "twitch_app_access_token" VARCHAR(255) NOT NULL DEFAULT '';
        `);

        await queryRunner.query(`
            ALTER TABLE "content_creators"
            ADD COLUMN IF NOT EXISTS "twitch_client_id" VARCHAR(255) NOT NULL DEFAULT '';
        `);
    }
}

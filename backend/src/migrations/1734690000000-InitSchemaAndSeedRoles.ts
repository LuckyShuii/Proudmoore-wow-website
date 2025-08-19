import { MigrationInterface, QueryRunner } from "typeorm";

export class InitSchemaAndSeedRoles1734690000000 implements MigrationInterface {
name = "InitSchemaAndSeedRoles1734690000000";

public async up(queryRunner: QueryRunner): Promise<void> {
    // Create tables
    await queryRunner.query(`
    CREATE TABLE IF NOT EXISTS roles (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL UNIQUE,
        description TEXT,
        created_at timestamptz NOT NULL DEFAULT NOW(),
        updated_at timestamptz NOT NULL DEFAULT NOW()
    );
    `);

    await queryRunner.query(`
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at timestamptz NOT NULL DEFAULT NOW(),
        updated_at timestamptz NOT NULL DEFAULT NOW(),
        last_login timestamptz NULL
    );
    `);

    await queryRunner.query(`
    CREATE TABLE IF NOT EXISTS user_roles (
        user_id INT NOT NULL,
        role_id INT NOT NULL,
        created_at timestamptz NOT NULL DEFAULT NOW(),
        updated_at timestamptz NOT NULL DEFAULT NOW(),
        CONSTRAINT pk_user_roles PRIMARY KEY (user_id, role_id),
        CONSTRAINT fk_user_roles_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
        CONSTRAINT fk_user_roles_role FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE
    );
    `);

    // Seed roles (idempotent)
    await queryRunner.query(`
    INSERT INTO roles (name, description) VALUES
        ('Administrator','Full Access'),
        ('Website Developer','Full Access'),
        ('Social Media Manager','Elevated Privileges'),
        ('Community Manager','Elevated Privileges'),
        ('Translator','Access to Translation Tools'),
        ('Head Game Master','Elevated Privileges')
    ON CONFLICT (name) DO NOTHING;
    `);
}

public async down(queryRunner: QueryRunner): Promise<void> {
    // Remove seed (optional)
    await queryRunner.query(`
    DELETE FROM roles
    WHERE name IN (
        'Administrator',
        'Website Developer',
        'Social Media Manager',
        'Community Manager',
        'Translator',
        'Head Game Master'
    );
    `);

    // Drop tables in dependency order
    await queryRunner.query(`DROP TABLE IF EXISTS user_roles;`);
    await queryRunner.query(`DROP TABLE IF EXISTS users;`);
    await queryRunner.query(`DROP TABLE IF EXISTS roles;`);
}
}

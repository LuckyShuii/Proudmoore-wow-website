import { MigrationInterface, QueryRunner } from "typeorm";

export class InitSchemaAndSeedRoles1734690000000 implements MigrationInterface {
name = "InitSchemaAndSeedRoles1734690000000";

public async up(queryRunner: QueryRunner): Promise<void> {
    // Create tables
    await queryRunner.query(`
    CREATE TABLE IF NOT EXISTS roles (
        id SERIAL PRIMARY KEY,
        code VARCHAR(10) UNIQUE,
        name VARCHAR(255) NOT NULL UNIQUE,
        description TEXT,
        created_at timestamptz NOT NULL DEFAULT NOW(),
        updated_at timestamptz NOT NULL DEFAULT NOW()
    );
    `);

    await queryRunner.query(`
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        uuid VARCHAR(255) NOT NULL UNIQUE,
        username VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at timestamptz NOT NULL DEFAULT NOW(),
        updated_at timestamptz NOT NULL DEFAULT NOW(),
        last_login timestamptz NULL,
        created_by INT NULL,
        last_updated_by INT NULL
    );
    `);

    await queryRunner.query(`
    CREATE TABLE IF NOT EXISTS user_roles (
        user_id INT NOT NULL,
        role_id INT NOT NULL,
        created_at timestamptz NOT NULL DEFAULT NOW(),
        updated_at timestamptz NOT NULL DEFAULT NOW(),
        granted_by INT NULL,
        CONSTRAINT pk_user_roles PRIMARY KEY (user_id, role_id),
        CONSTRAINT fk_user_roles_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
        CONSTRAINT fk_user_roles_role FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE
    );
    `);

    // Seed roles (idempotent)
    await queryRunner.query(`
    INSERT INTO roles (code, name, description) VALUES
        ('ADMIN', 'Administrator','Full Access'),
        ('DEV', 'Website Developer','Full Access'),
        ('SMM', 'Social Media Manager','Elevated Privileges'),
        ('CM', 'Community Manager','Elevated Privileges'),
        ('TRANSLATOR', 'Translator','Access to Translation Tools'),
        ('HGM', 'Head Game Master','Elevated Privileges')
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
        'Head Game Master',
        'Translator',
    );
    `);

    // Drop tables in dependency order
    await queryRunner.query(`DROP TABLE IF EXISTS user_roles;`);
    await queryRunner.query(`DROP TABLE IF EXISTS users;`);
    await queryRunner.query(`DROP TABLE IF EXISTS roles;`);
}
}

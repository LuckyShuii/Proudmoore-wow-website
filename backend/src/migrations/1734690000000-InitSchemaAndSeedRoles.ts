import { MigrationInterface, QueryRunner } from "typeorm";

export class InitSchemaAndSeedRoles1755765204475 implements MigrationInterface {
    name = "InitSchemaAndSeedRoles1755765204475";

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Roles
        await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS roles (
            id SERIAL PRIMARY KEY,
            code VARCHAR(10) UNIQUE,
            name VARCHAR(255) NOT NULL UNIQUE,
            testColumn VARCHAR(10) UNIQUE,
            description VARCHAR(255) NOT NULL DEFAULT 'N/A',
            created_at TIMESTAMP NOT NULL DEFAULT NOW(),
            updated_at TIMESTAMP NOT NULL DEFAULT NOW()
        );
        `);

        // Users
        await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            uuid VARCHAR(255) NOT NULL UNIQUE,
            username VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP NOT NULL DEFAULT NOW(),
            updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
            last_login TIMESTAMP NULL,
            created_by INT NULL,
            last_updated_by INT NULL
        );
        `);

        // User Roles
        await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS user_roles (
            user_id INT NOT NULL,
            role_id INT NOT NULL,
            granted_by INT NULL,
            created_at TIMESTAMP NOT NULL DEFAULT NOW(),
            updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
            CONSTRAINT pk_user_roles PRIMARY KEY (user_id, role_id),
            CONSTRAINT fk_user_roles_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
            CONSTRAINT fk_user_roles_role FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE,
            CONSTRAINT fk_user_roles_granted_by FOREIGN KEY (granted_by) REFERENCES users(id) ON DELETE SET NULL
        );
        `);

        // Content Creators
        await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS content_creators (
            id SERIAL PRIMARY KEY,
            username VARCHAR(255) NOT NULL,
            twitch_app_access_token VARCHAR(255) NOT NULL,
            twitch_client_id VARCHAR(255) NOT NULL,
            created_at TIMESTAMP NOT NULL DEFAULT NOW(),
            updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
            created_by INT NULL,
            last_updated_by INT NULL,
            CONSTRAINT fk_cc_created_by FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE SET NULL,
            CONSTRAINT fk_cc_last_updated_by FOREIGN KEY (last_updated_by) REFERENCES users(id) ON DELETE SET NULL
        );
        `);

        // Foreign keys for users
        await queryRunner.query(`
        ALTER TABLE users
        ADD CONSTRAINT fk_users_created_by FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE SET NULL;
        `);

        await queryRunner.query(`
        ALTER TABLE users
        ADD CONSTRAINT fk_users_last_updated_by FOREIGN KEY (last_updated_by) REFERENCES users(id) ON DELETE SET NULL;
        `);

        // Seed roles
        await queryRunner.query(`
        INSERT INTO roles (code, name, description) VALUES
            ('ADMIN', 'Administrator', 'Full Access'),
            ('DEV', 'Website Developer', 'Full Access'),
            ('SMM', 'Social Media Manager', 'Elevated Privileges'),
            ('CM', 'Community Manager', 'Elevated Privileges'),
            ('TRANSLATOR', 'Translator', 'Access to Translation Tools'),
            ('HGM', 'Head Game Master', 'Elevated Privileges')
        ON CONFLICT (name) DO NOTHING;
        `);

        await queryRunner.query(`
        INSERT INTO user_roles (user_id, role_id, granted_by, created_at, updated_at)
        SELECT u.id, r.id, u.id, NOW(), NOW()
        FROM users u
        JOIN roles r ON r.code = 'ADMIN'
        WHERE u.username = 'root'
        ON CONFLICT DO NOTHING;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS content_creators;`);
        await queryRunner.query(`DROP TABLE IF EXISTS user_roles;`);
        await queryRunner.query(`DROP TABLE IF EXISTS users;`);
        await queryRunner.query(`DROP TABLE IF EXISTS roles;`);
    }
}

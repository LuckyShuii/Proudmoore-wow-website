import { DataSource } from "typeorm";
import path from "path";

export const dataSource = new DataSource({
	type: "postgres",
	host: "db",
	port: 5432,
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,

    // Enable or disable synchronization based on the project status
	synchronize: process.env.PROJECT_STATUS === 'DEV' ? true : false,
	migrations: [process.env.PROJECT_STATUS === 'DEV' ? "src/migrations/*.ts" : path.join(__dirname, "..", "migrations", "*.js")],
	migrationsTableName: "migrations",
	logging: ["error", "query", "schema"],

    // Specify the entities to be used based on the project status, no need to import them
	entities: [process.env.PROJECT_STATUS === 'DEV' ? "src/entities/*.ts" : path.join(__dirname, "..", "entities", "*.js")],
});
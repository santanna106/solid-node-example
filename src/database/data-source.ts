import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "database_ignite",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "rentx",
    synchronize: true,
    logging: true,
    entities: [`./src/modules/cars/entities/*.{ts,js}`,`./src/modules/accounts/entities/*.{ts,js}`],
    subscribers: [],
    migrations: [`./src/database/migrations/*.{ts,js}`],
    
})
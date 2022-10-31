import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "rentx",
    synchronize: true,
    logging: true,
    entities: [`${__dirname}/**/model/*.{ts,js}`],
    subscribers: [],
    migrations: [`${__dirname}/src/database/migrations/*.{ts,js}`],
    
})
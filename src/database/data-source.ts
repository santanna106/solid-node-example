import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "db",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "postgres",
    synchronize: true,
    logging: true,
    entities: [`${__dirname}/**/model/*.{ts,js}`],
    subscribers: [],
    migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
})
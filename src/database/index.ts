import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    "type":"postgres",
    "port":5432,
    "host":"localhost",
    "username":"postgres",
    "password":"postgres",
    "database":"rentx"
});
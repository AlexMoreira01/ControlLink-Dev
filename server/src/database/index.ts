import { DataSource } from "typeorm";
import { Links } from "./entities/Links";

const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.Host,
    port: Number(process.env.Port),
    username: process.env.UserNameDb,
    password: process.env.Password,
    database: process.env.Database,
    entities: [Links],
    migrations: ["./dist/database/migrations/*.ts"]
    // migrations: ["./src/database/migrations/*.ts"]
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

export default AppDataSource
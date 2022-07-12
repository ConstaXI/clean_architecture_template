import { DataSource } from "typeorm"
import UserEntity from "../models/User"

const dataSource = new DataSource({
  database: "cleanApi",
  type: "postgres",
  port: 5432,
  username: "postgres",
  password: "postgres",
  entities: [UserEntity],
  migrations: ["src/infra/db/migrations/*.ts"],
})

export default dataSource

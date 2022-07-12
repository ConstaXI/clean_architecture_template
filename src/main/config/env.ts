export default {
  dbPort: process.env.DB_PORT || 5432,
  dbUser: process.env.DB_USER || "postgres",
  dbPassword: process.env.DB_PASSWORD || "postgres",
  dbType: process.env.DB_TYPE || "postgres",
}

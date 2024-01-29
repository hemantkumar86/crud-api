import { Sequelize } from "sequelize";

const sequelize = new Sequelize("users", "root", "123456", {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
});



export { sequelize };
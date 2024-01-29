"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize("users", "root", "123456", {
    dialect: "mysql",
    host: "localhost",
    port: 3306,
});
exports.sequelize = sequelize;

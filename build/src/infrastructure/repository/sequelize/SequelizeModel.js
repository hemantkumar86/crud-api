"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuburbSequelize = void 0;
const SequelizerConnection_1 = require("./SequelizerConnection");
const sequelize_1 = require("sequelize");
class SuburbSequelize extends sequelize_1.Model {
}
exports.SuburbSequelize = SuburbSequelize;
SuburbSequelize.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    state: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    postcode: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, { tableName: "suburbtable", sequelize: SequelizerConnection_1.sequelize, timestamps: false });

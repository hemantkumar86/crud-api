import { sequelize } from "./SequelizerConnection";
import {Model,DataTypes} from "sequelize"
export class SuburbSequelize extends Model{}
SuburbSequelize.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
      autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    state:{
        type:DataTypes.STRING,
        allowNull:false
    },
    postcode:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
},{ tableName:"suburbtable", sequelize,timestamps:false})
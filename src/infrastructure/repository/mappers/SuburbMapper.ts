import { SuburbEntites } from "../../../domain/entities/SuburbEntities";
import { SuburbSequelize } from "../sequelize/SequelizeModel";
export class SuburbMapper{
    static toDomain(raw:SuburbSequelize[]){
        const data:SuburbEntites[]=[]
        raw.forEach((suburb)=>{
            const suburbData=new SuburbEntites(suburb.dataValues.name,suburb.dataValues.state,suburb.dataValues.postcode,suburb.dataValues.id)
            data.push(suburbData)
        })
        return data
    }
}
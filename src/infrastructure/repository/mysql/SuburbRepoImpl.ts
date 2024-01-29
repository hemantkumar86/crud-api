import { SuburbEntites } from "../../../domain/entities/SuburbEntities";
import { SuburbRepo } from "../../../domain/interface/repos/SuburbRepo";
import { SuburbMapper } from "../mappers/SuburbMapper";
import { SuburbSequelize } from "../sequelize/SequelizeModel";

export class SuburbRepositoryImpl implements SuburbRepo{
  async getSuburb(): Promise<SuburbEntites[]> {
        let data= await SuburbSequelize.findAll()
        return SuburbMapper.toDomain(data)
    }
     async createSuburb(suburb: SuburbEntites): Promise<number|string> {
        let existData= await SuburbSequelize.findAll({where:{postcode:suburb.getPostCode()}})
        if(existData.length>0){
            return `Suburb Already Exists`
        }else{
            const insertData=await SuburbSequelize.create({
                name:suburb.getName(),
                state:suburb.getState(),
                postcode:suburb.getPostCode(),
                id:suburb.getId()
             })
             return insertData.dataValues.id
        }

        
    }
    async getSuburbByID(id: number): Promise<SuburbEntites | undefined> {
        const data =await SuburbSequelize.findByPk(id) 
        if(!data){
            throw new Error("Not Found")
        }else{
            const mapedData=SuburbMapper.toDomain([data])
            return mapedData[0]
        }
    }

     async updateSuburb(id:number,suburb: SuburbEntites): Promise<[number]> {
        const data= await SuburbSequelize.update(suburb,{where:{id:id}}) 
        return data
    }
    async deleteSuburbByID(id: number): Promise<number> {

        const count = await SuburbSequelize.destroy({ where: { id: id} }); 
        return count
      }

}
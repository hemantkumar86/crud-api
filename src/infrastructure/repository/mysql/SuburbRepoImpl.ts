import { SuburbEntites } from "../../../domain/entities/SuburbEntities";
import { SuburbRepo } from "../../../domain/interface/repos/SuburbRepo";
import { SuburbMapper } from "../mappers/SuburbMapper";
import { SuburbSequelize } from "../sequelize/SequelizeModel";

export class SuburbRepositoryImpl implements SuburbRepo{
  async getSuburb(): Promise<SuburbEntites[]> {
        let suburbData= await SuburbSequelize.findAll()
        return SuburbMapper.toDomain(suburbData)
    }
     async createSuburb(suburb: SuburbEntites): Promise<number|string> {
        let existSuburb= await SuburbSequelize.findAll({where:{postcode:suburb.getPostCode()}})
        if(existSuburb.length>0){
            return `Suburb Already Exists`
        }else{
            const insertSuburbData=await SuburbSequelize.create({
                name:suburb.getName(),
                state:suburb.getState(),
                postcode:suburb.getPostCode(),
                id:suburb.getId()
             })
             return insertSuburbData.dataValues.id
        }

        
    }
    async getSuburbByID(id: number): Promise<SuburbEntites | undefined> {
        const suburb =await SuburbSequelize.findByPk(id) 
        if(!suburb){
            throw new Error("Not Found")
        }else{
            const mapedData=SuburbMapper.toDomain([suburb])
            return mapedData[0]
        }
    }

     async updateSuburb(id:number,suburb: SuburbEntites): Promise<[number]> {
        const result= await SuburbSequelize.update(suburb,{where:{id:id}}) 
        return result
    }
    async deleteSuburbByID(id: number): Promise<number> {

        const totalSuburbRowDeleted = await SuburbSequelize.destroy({ where: { id: id} }); 
        return totalSuburbRowDeleted
      }

}
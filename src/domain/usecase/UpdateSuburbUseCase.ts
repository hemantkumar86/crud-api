import { SuburbRepo } from "../interface/repos/SuburbRepo";
import { SuburbDto } from "../interface/dtos/SuburbDto";
import { SuburbEntites } from "../entities/SuburbEntities";

export class UpdateSuburbUseCase{
    constructor(private repo:SuburbRepo){}
    async execute(id:number,suburbParams:SuburbDto){
     try {
        const params=new SuburbEntites(suburbParams.name,suburbParams.state,suburbParams.postcode)
        const suburbResult=await this.repo.updateSuburb(id,params)
        return suburbResult
     } catch (error) {
        console.log(error)
        throw new Error("Error in Update")
     }
    }
}
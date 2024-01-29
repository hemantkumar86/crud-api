import { SuburbEntites } from "../entities/SuburbEntities";
import { SuburbDto } from "../interface/dtos/SuburbDto";
import { SuburbRepo } from "../interface/repos/SuburbRepo";

export class CreateSuburbUseCase{
    constructor(private repo:SuburbRepo){}
    async execute(suburbParams:SuburbDto){
        try {
            const params=new SuburbEntites(suburbParams.name,suburbParams.state,suburbParams.postcode)
            const data =await this.repo.createSuburb(params)
            return data
            
        } catch (error) {
            console.log(error);
            throw new Error("Error")
        }
    }
}
import { SuburbRepo } from "../interface/repos/SuburbRepo";
export class GetSuburbByIdUsecase{
    constructor(private repo:SuburbRepo){}
    async execute(id:number){
        try {
            const data=await this.repo.getSuburbByID(id);
            return data
            
        } catch (error) {
            console.log(error)
            throw new Error("Error:Suburb Not Found")
        }
    }
}
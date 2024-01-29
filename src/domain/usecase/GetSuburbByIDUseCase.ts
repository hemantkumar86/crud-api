import { SuburbRepo } from "../interface/repos/SuburbRepo";
export class GetSuburbByIdUsecase{
    constructor(private repo:SuburbRepo){}
    async execute(id:number){
        try {
            const suburbResult=await this.repo.getSuburbByID(id);
            return suburbResult
            
        } catch (error) {
            console.log(error)
            throw new Error("Error:Suburb Not Found")
        }
    }
}
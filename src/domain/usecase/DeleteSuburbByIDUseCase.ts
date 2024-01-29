import { SuburbRepo } from "../interface/repos/SuburbRepo";
export class DeleteSuburbByIdUseCase{
    constructor (private repo:SuburbRepo){}
    async execute(id:number){
        try {
            const suburbResult= await this.repo.deleteSuburbByID(id)
            return suburbResult   
        } catch (error) {
            console.log(error);
            throw new Error("Error in Delete");
        }
      
    }
}
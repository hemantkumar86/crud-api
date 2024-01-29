import { SuburbRepo } from "../interface/repos/SuburbRepo";
export class DeleteSuburbByIdUseCase{
    constructor (private repo:SuburbRepo){}
    async execute(id:number){
        try {
            const data= await this.repo.deleteSuburbByID(id)
            return data   
        } catch (error) {
            console.log(error);
            throw new Error("Error in Delete");
        }
      
    }
}
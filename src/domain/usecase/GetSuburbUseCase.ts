import { SuburbRepo } from "../interface/repos/SuburbRepo";
export class GetSuburbUseCase{
    constructor(private repo:SuburbRepo){}
    async execute(){
      
        try {
            const suburbResult= await this.repo.getSuburb()
            return suburbResult
        } catch (error) {
            console.log(error);
            throw new Error ("Error:No Suburb Found")
        }
    }
}
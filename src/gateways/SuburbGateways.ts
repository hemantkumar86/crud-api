import { SuburbDto } from "../domain/interface/dtos/SuburbDto";
import { GetSuburbByIdUsecase } from "../domain/usecase/GetSuburbByIDUseCase";
import { GetSuburbUseCase } from "../domain/usecase/GetSuburbUseCase";
import { DeleteSuburbByIdUseCase } from "../domain/usecase/DeleteSuburbByIDUseCase";
import { CreateSuburbUseCase } from "../domain/usecase/CreateSuburbUseCase";
import { UpdateSuburbUseCase } from "../domain/usecase/UpdateSuburbUseCase";
import { SuburbRepositoryImpl } from "../infrastructure/repository/mysql/SuburbRepoImpl";

export class SuburbGateway{
    suburbRepo:SuburbRepositoryImpl
    constructor(){
        this.suburbRepo=new SuburbRepositoryImpl()
    }

    createSuburb(suburb:SuburbDto){
        const createSuburb= new CreateSuburbUseCase(this.suburbRepo);
        return createSuburb.execute(suburb)
    }
    getSuburb(){
        const getSuburb=new GetSuburbUseCase(this.suburbRepo)
        return getSuburb.execute()
    }
    getSuburbByID(id:number){
        const  getSuburbBYId = new GetSuburbByIdUsecase(this.suburbRepo)
        return getSuburbBYId.execute(id)
    }
    deleteSuburbByID(id:number){
        const deleteSuburbByID=new DeleteSuburbByIdUseCase(this.suburbRepo)
        return deleteSuburbByID.execute(id)
    }
    updateSuburb(id:number,suburb:SuburbDto){
        const updateSuburb=new UpdateSuburbUseCase(this.suburbRepo)
        return updateSuburb.execute(id,suburb)
    }
}


import { SuburbEntites } from "../../entities/SuburbEntities";

export interface SuburbRepo{
    getSuburb():Promise<SuburbEntites[]>
    createSuburb(suburb:SuburbEntites):Promise<number|string>
    deleteSuburbByID(id:number):Promise<number>
    getSuburbByID(id:number):Promise<SuburbEntites|undefined>
    updateSuburb(id:number,suburb:SuburbEntites):Promise<[number]>
}
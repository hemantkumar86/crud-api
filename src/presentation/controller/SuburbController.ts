import { SuburbDto } from "../../domain/interface/dtos/SuburbDto";
import { SuburbGateway } from "../../gateways/SuburbGateways";
import { Request,Response } from "express";

export class SuburbController{
    public async getSuburb(req:Request,res:Response):Promise<void>{
        try {
            const suburb= await new SuburbGateway().getSuburb()
            res.json(suburb)
        } catch (error) {
            console.log(error)
            res.send(error)

        }
    }
    public async getSuburbById(req:Request,res:Response):Promise<void>{
        try {
            const id=req.params.id as unknown as number;
            const suburb=await new SuburbGateway().getSuburbByID(id)
            if(!suburb){
                res.json({
                    msg:"No Suburb Found for id:"+id
                })
            }else{
                res.json(suburb)
            }
            
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }

    public async createSuburb(req:Request,res:Response):Promise<void>{
        try {
            const name=req.body.name as string;
            const state=req.body.state as string;
            const postcode=req.body.postcode as number;
            const data:SuburbDto={
                name,state,postcode
            }
            const  result = await new SuburbGateway().createSuburb(data);
            res.json({
                msg:`${result}`
            })
            
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
    public async deleteSuburbByID(req:Request,res:Response):Promise<string|any>{
        try {
            const id=req.params.id as unknown as number;
            const suburb=await new SuburbGateway().deleteSuburbByID(id)
            if(!suburb){
                res.json({
                    msg:"No Suburb Found for id:"+id
                })
            }else{
                return res.status(200).json({
                    "Total Rows Affected":suburb,
                    "message":`Data with id ${id} has been deleted`
      
                  })
            }
            
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
    public async updateSuburb(req:Request,res:Response):Promise<string|any>{
        try {
            const  id=parseInt(req.params.id as string);
            const name=req.body.name as string;
            const state=req.body.state as string;
            const postcode=req.body.postcode as number;
            const data:SuburbDto={
                name,state,postcode
            }
            const result= await new  SuburbGateway().updateSuburb(id,data);
            if(!result){
                res.json({
                    msg:"No Suburb Found for id:"+id
                })
            }else{
                return res.status(200).json({
                    "Total Rows Affected":result,
                    "message":`Data with id ${id} has been updated`
      
                  })
            }

            
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
}
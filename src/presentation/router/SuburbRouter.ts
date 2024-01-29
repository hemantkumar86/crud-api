import express from "express";
import { SuburbController } from "../controller/SuburbController";
const Router=express.Router();
const controller=new SuburbController();
Router.get("/",(req,res)=>controller.getSuburb(req,res))
Router.post("/", (req,res)=>controller.createSuburb(req,res));
Router.get("/:id",(req,res)=>controller.getSuburbById(req,res))
Router.delete("/:id",(req,res)=>controller.deleteSuburbByID(req,res))
Router.put("/:id",(req,res)=>controller.updateSuburb(req,res))

export {Router}
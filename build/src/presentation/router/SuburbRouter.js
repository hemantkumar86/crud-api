"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
const express_1 = __importDefault(require("express"));
const SuburbController_1 = require("../controller/SuburbController");
const Router = express_1.default.Router();
exports.Router = Router;
const controller = new SuburbController_1.SuburbController();
Router.get("/", (req, res) => controller.getSuburb(req, res));
Router.post("/", (req, res) => controller.createSuburb(req, res));
Router.get("/:id", (req, res) => controller.getSuburbById(req, res));
Router.delete("/:id", (req, res) => controller.deleteSuburbByID(req, res));
Router.put("/:id", (req, res) => controller.updateSuburb(req, res));

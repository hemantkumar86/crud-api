"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuburbController = void 0;
const SuburbGateways_1 = require("../../gateways/SuburbGateways");
class SuburbController {
    getSuburb(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const suburb = yield new SuburbGateways_1.SuburbGateway().getSuburb();
                res.json(suburb);
            }
            catch (error) {
                console.log(error);
                res.send(error);
            }
        });
    }
    getSuburbById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const suburb = yield new SuburbGateways_1.SuburbGateway().getSuburbByID(id);
                if (!suburb) {
                    res.json({
                        msg: "No Suburb Found for id:" + id
                    });
                }
                else {
                    res.json(suburb);
                }
            }
            catch (error) {
                console.log(error);
                res.send(error);
            }
        });
    }
    createSuburb(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const name = req.body.name;
                const state = req.body.state;
                const postcode = req.body.postcode;
                const data = {
                    name, state, postcode
                };
                const result = yield new SuburbGateways_1.SuburbGateway().createSuburb(data);
                res.json({
                    msg: `${result}`
                });
            }
            catch (error) {
                console.log(error);
                res.send(error);
            }
        });
    }
    deleteSuburbByID(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const suburb = yield new SuburbGateways_1.SuburbGateway().deleteSuburbByID(id);
                if (!suburb) {
                    res.json({
                        msg: "No Suburb Found for id:" + id
                    });
                }
                else {
                    return res.status(200).json({
                        "Total Rows Affected": suburb,
                        "message": `Data with id ${id} has been deleted`
                    });
                }
            }
            catch (error) {
                console.log(error);
                res.send(error);
            }
        });
    }
    updateSuburb(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const name = req.body.name;
                const state = req.body.state;
                const postcode = req.body.postcode;
                const data = {
                    name, state, postcode
                };
                const result = yield new SuburbGateways_1.SuburbGateway().updateSuburb(id, data);
                if (!result) {
                    res.json({
                        msg: "No Suburb Found for id:" + id
                    });
                }
                else {
                    return res.status(200).json({
                        "Total Rows Affected": result,
                        "message": `Data with id ${id} has been updated`
                    });
                }
            }
            catch (error) {
                console.log(error);
                res.send(error);
            }
        });
    }
}
exports.SuburbController = SuburbController;

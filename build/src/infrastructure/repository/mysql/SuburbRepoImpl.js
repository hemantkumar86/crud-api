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
exports.SuburbRepositoryImpl = void 0;
const SuburbMapper_1 = require("../mappers/SuburbMapper");
const SequelizeModel_1 = require("../sequelize/SequelizeModel");
class SuburbRepositoryImpl {
    getSuburb() {
        return __awaiter(this, void 0, void 0, function* () {
            let suburbData = yield SequelizeModel_1.SuburbSequelize.findAll();
            return SuburbMapper_1.SuburbMapper.toDomain(suburbData);
        });
    }
    createSuburb(suburb) {
        return __awaiter(this, void 0, void 0, function* () {
            let existSuburb = yield SequelizeModel_1.SuburbSequelize.findAll({ where: { postcode: suburb.getPostCode() } });
            if (existSuburb.length > 0) {
                return `Suburb Already Exists`;
            }
            else {
                const insertSuburbData = yield SequelizeModel_1.SuburbSequelize.create({
                    name: suburb.getName(),
                    state: suburb.getState(),
                    postcode: suburb.getPostCode(),
                    id: suburb.getId()
                });
                return insertSuburbData.dataValues.id;
            }
        });
    }
    getSuburbByID(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const suburb = yield SequelizeModel_1.SuburbSequelize.findByPk(id);
            if (!suburb) {
                throw new Error("Not Found");
            }
            else {
                const mapedData = SuburbMapper_1.SuburbMapper.toDomain([suburb]);
                return mapedData[0];
            }
        });
    }
    updateSuburb(id, suburb) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield SequelizeModel_1.SuburbSequelize.update(suburb, { where: { id: id } });
            return result;
        });
    }
    deleteSuburbByID(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const totalSuburbRowDeleted = yield SequelizeModel_1.SuburbSequelize.destroy({ where: { id: id } });
            return totalSuburbRowDeleted;
        });
    }
}
exports.SuburbRepositoryImpl = SuburbRepositoryImpl;

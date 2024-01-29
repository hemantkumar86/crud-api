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
exports.CreateSuburbUseCase = void 0;
const SuburbEntities_1 = require("../entities/SuburbEntities");
class CreateSuburbUseCase {
    constructor(repo) {
        this.repo = repo;
    }
    execute(suburbParams) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const params = new SuburbEntities_1.SuburbEntites(suburbParams.name, suburbParams.state, suburbParams.postcode);
                const data = yield this.repo.createSuburb(params);
                return data;
            }
            catch (error) {
                console.log(error);
                throw new Error("Error");
            }
        });
    }
}
exports.CreateSuburbUseCase = CreateSuburbUseCase;

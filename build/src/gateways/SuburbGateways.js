"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuburbGateway = void 0;
const GetSuburbByIDUseCase_1 = require("../domain/usecase/GetSuburbByIDUseCase");
const GetSuburbUseCase_1 = require("../domain/usecase/GetSuburbUseCase");
const DeleteSuburbByIDUseCase_1 = require("../domain/usecase/DeleteSuburbByIDUseCase");
const CreateSuburbUseCase_1 = require("../domain/usecase/CreateSuburbUseCase");
const UpdateSuburbUseCase_1 = require("../domain/usecase/UpdateSuburbUseCase");
const SuburbRepoImpl_1 = require("../infrastructure/repository/mysql/SuburbRepoImpl");
class SuburbGateway {
    constructor() {
        this.suburbRepo = new SuburbRepoImpl_1.SuburbRepositoryImpl();
    }
    createSuburb(suburb) {
        const createSuburb = new CreateSuburbUseCase_1.CreateSuburbUseCase(this.suburbRepo);
        return createSuburb.execute(suburb);
    }
    getSuburb() {
        const getSuburb = new GetSuburbUseCase_1.GetSuburbUseCase(this.suburbRepo);
        return getSuburb.execute();
    }
    getSuburbByID(id) {
        const getSuburbBYId = new GetSuburbByIDUseCase_1.GetSuburbByIdUsecase(this.suburbRepo);
        return getSuburbBYId.execute(id);
    }
    deleteSuburbByID(id) {
        const deleteSuburbByID = new DeleteSuburbByIDUseCase_1.DeleteSuburbByIdUseCase(this.suburbRepo);
        return deleteSuburbByID.execute(id);
    }
    updateSuburb(id, suburb) {
        const updateSuburb = new UpdateSuburbUseCase_1.UpdateSuburbUseCase(this.suburbRepo);
        return updateSuburb.execute(id, suburb);
    }
}
exports.SuburbGateway = SuburbGateway;

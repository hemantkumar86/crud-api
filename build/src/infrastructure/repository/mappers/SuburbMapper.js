"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuburbMapper = void 0;
const SuburbEntities_1 = require("../../../domain/entities/SuburbEntities");
class SuburbMapper {
    static toDomain(raw) {
        const data = [];
        raw.forEach((suburb) => {
            const suburbData = new SuburbEntities_1.SuburbEntites(suburb.dataValues.name, suburb.dataValues.state, suburb.dataValues.postcode, suburb.dataValues.id);
            data.push(suburbData);
        });
        return data;
    }
}
exports.SuburbMapper = SuburbMapper;

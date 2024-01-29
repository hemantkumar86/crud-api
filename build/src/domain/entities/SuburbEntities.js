"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuburbEntites = void 0;
class SuburbEntites {
    constructor(name, state, postcode, id) {
        this.name = name;
        this.state = state;
        this.postcode = postcode;
        this.id = id;
    }
    getName() {
        return this.name;
    }
    getState() {
        return this.state;
    }
    getPostCode() {
        return this.postcode;
    }
    getId() {
        return this.id;
    }
    setName(name) {
        this.name = name;
    }
    setState(state) {
        this.state = state;
    }
    setPostCode(postcode) {
        this.postcode = postcode;
    }
    setId(id) {
        this.id = id;
    }
}
exports.SuburbEntites = SuburbEntites;

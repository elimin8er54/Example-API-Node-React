"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ParticlePage_1 = __importDefault(require("../randomForFun/Particles/ParticlePage"));
require("../../App.css");
function Fun() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("p", null, "Random stuff for fun and for understanding Reacts rendering.."),
        react_1.default.createElement(ParticlePage_1.default, null)));
}
exports.default = Fun;

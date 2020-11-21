"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function TableHeader(props) {
    const item = props.headVals.map((headVal) => {
        return react_1.default.createElement("th", { key: headVal }, headVal);
    });
    return (react_1.default.createElement("thead", null,
        react_1.default.createElement("tr", null, item)));
}
exports.default = TableHeader;

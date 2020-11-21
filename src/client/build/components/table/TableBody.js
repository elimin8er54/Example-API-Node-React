"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const TableRow_1 = __importDefault(require("./TableRow"));
function TableBody(props) {
    const rows = props.colVals.map((colVal) => {
        return (react_1.default.createElement("tr", { key: colVal[Object.keys(colVal)[0]] },
            react_1.default.createElement(TableRow_1.default, { colVals: colVal })));
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("tbody", null, rows)));
}
exports.default = TableBody;

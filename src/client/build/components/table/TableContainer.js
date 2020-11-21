"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const TableHeader_1 = __importDefault(require("./TableHeader"));
const TableBody_1 = __importDefault(require("./TableBody"));
function TableContainer(props) {
    //This will only check the first row of the table body.
    let theRender;
    if (Object.keys(props.colVals).length === 0) {
        theRender = "No results found.";
    }
    else if (Object.keys(props.colVals[0]).length !== props.headVals.length) {
        theRender = react_1.default.createElement("p", null,
            "Table ",
            react_1.default.createElement("em", null, "needs"),
            " to have the same amount of Columns for the Header and Body");
    }
    else {
        theRender = react_1.default.createElement("table", null,
            react_1.default.createElement(TableHeader_1.default, { headVals: props.headVals }),
            react_1.default.createElement(TableBody_1.default, { colVals: props.colVals }));
    }
    return react_1.default.createElement(react_1.default.Fragment, null, theRender);
}
exports.default = TableContainer;

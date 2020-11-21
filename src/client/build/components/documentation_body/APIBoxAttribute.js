"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("../../App.css");
function APIBoxAttribute(props) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("li", { className: "api_attribute_body" },
            react_1.default.createElement("div", { className: "api_attribute_leftbox" },
                react_1.default.createElement("div", { className: "api_attribute_name" }, props.attName)),
            react_1.default.createElement("div", { className: "api_attribute_rightbox" },
                react_1.default.createElement("div", { className: "api_attribute_type" }, props.attType)))));
}
exports.default = APIBoxAttribute;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("../../App.css");
const APIBoxAttribute_1 = __importDefault(require("./APIBoxAttribute"));
function APIBox(props) {
    let items = [];
    if (props.attributes !== undefined) {
        items = props.attributes.map((address) => (react_1.default.createElement(APIBoxAttribute_1.default, { attType: address.type, attName: address.name })));
    }
    else {
        items = [];
    }
    return (react_1.default.createElement("div", { className: "api_block" },
        react_1.default.createElement("div", { className: "api_title" },
            react_1.default.createElement("b", null, props.title)),
        react_1.default.createElement("div", { className: "api_requestbody" },
            react_1.default.createElement("h1", null, "Request Body")),
        react_1.default.createElement("div", { className: "api_body_info" },
            react_1.default.createElement("p", null, props.requestBody),
            react_1.default.createElement("p", null, "Content type:application/json"),
            react_1.default.createElement("p", null, "Production Base URL http://api.shauntsite.com")),
        react_1.default.createElement("div", { className: "api_attribute_title" },
            react_1.default.createElement("h4", null, "Attributes")),
        react_1.default.createElement("div", { className: "api_attribute_values" },
            react_1.default.createElement("ul", { className: "api_attribute" }, items))));
}
exports.default = APIBox;

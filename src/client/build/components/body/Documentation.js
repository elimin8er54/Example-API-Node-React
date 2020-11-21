"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Sidebar_1 = __importDefault(require("../Sidebar"));
require("../../App.css");
function Documentation() {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("p", null, "If you create/update/delete using this API you can go back to Shauntsite.com and see your added/updated"),
        react_1.default.createElement(Sidebar_1.default, null)));
}
exports.default = Documentation;

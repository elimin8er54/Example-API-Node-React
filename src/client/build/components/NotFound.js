"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function NotFound() {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null, "Page Not Found "),
        react_1.default.createElement("p", null, " Sorry, there is nothing to see here.")));
}
exports.default = NotFound;

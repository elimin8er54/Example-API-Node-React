"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("../../App.css");
function About() {
    return (react_1.default.createElement("div", { className: "about" },
        react_1.default.createElement("p", null, "Website uses Nodejs, Express, React, JWT, and other packages."),
        react_1.default.createElement("p", null, "I have this running on an AWS EC2 instance with a subdomain and the main website running in Apache and hosts the website you came from. (shauntsite.com)")));
}
exports.default = About;

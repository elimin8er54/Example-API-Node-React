"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const API_1 = __importDefault(require("./documentation_body/API"));
require("../App.css");
function Sidebar() {
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement("div", { className: "sidenav" },
            react_1.default.createElement(react_router_dom_1.NavLink, { exact: true, to: "/documentation/properties" }, "Properties"),
            react_1.default.createElement(react_router_dom_1.NavLink, { exact: true, to: "/documentation/landlords" }, "Landlords")),
        react_1.default.createElement("div", { className: "pages" },
            react_1.default.createElement(react_router_dom_1.Route, { path: "/documentation/properties", render: (props) => react_1.default.createElement(API_1.default, Object.assign({}, props, { kind: "property" })) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/documentation/landlords", render: (props) => react_1.default.createElement(API_1.default, Object.assign({}, props, { kind: "landlord" })) }))));
}
exports.default = Sidebar;

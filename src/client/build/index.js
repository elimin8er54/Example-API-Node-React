"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
require("./index.css");
const serviceWorker = __importStar(require("./serviceWorker"));
const react_router_dom_1 = require("react-router-dom");
const Header_1 = __importDefault(require("./components/Header"));
const MainLogin_1 = __importDefault(require("./components/MainLogin"));
react_dom_1.default.render(react_1.default.createElement(react_1.default.StrictMode, null,
    react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(react_router_dom_1.Switch, null,
            react_1.default.createElement(react_router_dom_1.Route, { path: "/home", component: Header_1.default }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/", component: MainLogin_1.default })))), document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

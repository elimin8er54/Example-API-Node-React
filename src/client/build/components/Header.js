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
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const About_1 = __importDefault(require("./body/About"));
const Documentation_1 = __importDefault(require("./body/Documentation"));
const Home_1 = __importDefault(require("./body/Home"));
const Fun_1 = __importDefault(require("./body/Fun"));
const JWTAuth_1 = require("./JWTAuth");
const Logout_1 = __importDefault(require("./Logout"));
const Properties_1 = __importDefault(require("./body/Properties"));
require("../App.css");
function Header() {
    react_1.useEffect(() => {
        JWTAuth_1.checkToken();
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", null,
            react_1.default.createElement("a", { target: "_blank", rel: "noopener noreferrer", className: "headerlink", href: "https://shauntsite.com" }, "Back to Shauntsite.com."),
            react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
                react_1.default.createElement("div", { className: "container" },
                    react_1.default.createElement("ul", { className: "nav" },
                        react_1.default.createElement("li", null,
                            react_1.default.createElement(react_router_dom_1.NavLink, { exact: true, to: "/home" }, "Home")),
                        react_1.default.createElement("li", null,
                            react_1.default.createElement(react_router_dom_1.NavLink, { to: "/about" }, "About")),
                        react_1.default.createElement("li", null,
                            react_1.default.createElement(react_router_dom_1.NavLink, { to: "/documentation/properties" }, "Documentation ")),
                        react_1.default.createElement("li", null,
                            react_1.default.createElement(react_router_dom_1.NavLink, { to: "/properties" }, "Properties ")),
                        react_1.default.createElement("li", null,
                            react_1.default.createElement(react_router_dom_1.NavLink, { to: "/fun" }, "For Fun ")),
                        react_1.default.createElement("li", { className: "logoutheader" },
                            react_1.default.createElement(react_router_dom_1.NavLink, { to: "/logout" }, "Logout "))),
                    react_1.default.createElement("div", { className: "pages" },
                        react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/home", component: Home_1.default }),
                        react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/about", component: About_1.default }),
                        react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/documentation/properties", component: Documentation_1.default }),
                        react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/documentation/landlords", component: Documentation_1.default }),
                        react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/properties", component: Properties_1.default }),
                        react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/fun", component: Fun_1.default }),
                        react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/logout", component: Logout_1.default })))))));
}
exports.default = Header;

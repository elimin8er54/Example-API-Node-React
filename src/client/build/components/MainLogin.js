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
require("../App.css");
const Login_1 = __importDefault(require("./body/Login"));
const Signup_1 = __importDefault(require("./body/Signup"));
function MainLogin() {
    const [isLoginPage, setIsLoginPage] = react_1.useState(true);
    function swapper() {
        setIsLoginPage(!isLoginPage);
    }
    const page = isLoginPage ? (react_1.default.createElement(Login_1.default, { swapper: swapper })) : (react_1.default.createElement(Signup_1.default, { swapper: swapper }));
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "login-container" },
            react_1.default.createElement("p", { className: "login_title" },
                "Login page using JWT tokens and a MySQL database.",
                react_1.default.createElement("br", null),
                "Create an account, do not put a password you use personally.",
                react_1.default.createElement("br", null),
                "You don't need any autherization to use http methods.",
                react_1.default.createElement("br", null),
                react_1.default.createElement("a", { target: "_blank", rel: "noopener noreferrer", href: "https://shauntsite.com" }, "Back to Shauntsite.com.")),
            react_1.default.createElement("div", { className: "login-box" }, page))));
}
exports.default = MainLogin;

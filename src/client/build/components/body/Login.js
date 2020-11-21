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
require("../../App.css");
const config_json_1 = __importDefault(require("../config.json"));
function Login(props) {
    const [username, setUsername] = react_1.useState("");
    const [password, setPassword] = react_1.useState("");
    const [notice, setNotice] = react_1.useState("");
    function handleInputChange(event) {
        setUsername(event.target.value);
    }
    function handleInputPasswordChange(event) {
        setPassword(event.target.value);
    }
    function handleSubmit(event) {
        fetch(`${config_json_1.default.SERVER_URL}api/signin`, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        })
            .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
            .then((data) => {
            if (data.success) {
                localStorage.setItem("token", data.token);
                document.location.href = "/home";
            }
            else {
                setPassword("");
                setNotice("Incorrect login information");
            }
        });
        event.preventDefault();
    }
    return (react_1.default.createElement("div", { className: "login" },
        react_1.default.createElement("h4", null,
            "Sign-In: ",
            react_1.default.createElement("span", { className: "signin-info" },
                "(Click \"",
                react_1.default.createElement("i", null, "Switch to Sign-Up"),
                "\" and enter a username to log in.)")),
        react_1.default.createElement("form", { onSubmit: handleSubmit },
            react_1.default.createElement("p", { className: "loginerror" }, notice),
            "Username",
            react_1.default.createElement("input", { className: "login_username", name: "username", type: "text", onChange: handleInputChange, value: username }),
            "Password",
            react_1.default.createElement("input", { className: "login_password", name: "password", type: "text", onChange: handleInputPasswordChange, value: password }),
            react_1.default.createElement("input", { className: "login_button", type: "submit", value: "Submit" }),
            react_1.default.createElement("button", { type: "button", className: "signup_button", onClick: props.swapper }, "Switch to Sign Up"))));
}
exports.default = Login;

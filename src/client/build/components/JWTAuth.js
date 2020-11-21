"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkToken = void 0;
const config_json_1 = __importDefault(require("./config.json"));
exports.checkToken = () => {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
    };
    fetch(`${config_json_1.default.SERVER_URL}api/jwtauth`, requestOptions)
        .then((response) => {
        if (response.ok) {
            return response.json();
        }
        document.location.href = "/";
    })
        .then((data) => {
        // This is what is in the body of the response
    });
};

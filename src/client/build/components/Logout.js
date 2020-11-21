"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../App.css");
function Logout() {
    localStorage.removeItem("token");
    document.location.href = "/";
}
exports.default = Logout;

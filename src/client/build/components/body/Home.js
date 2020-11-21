"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("../../App.css");
function Home() {
    return (react_1.default.createElement("div", { className: "home" },
        react_1.default.createElement("h2", null,
            react_1.default.createElement("b", null, "Example using React/Express/ Nodejs/JWT/MySQL.")),
        react_1.default.createElement("p", null, "Since this is a SPA we update certain parts of the website when browsing instead of reloading the whole page everytime."),
        react_1.default.createElement("p", null, "Using this method makes moving from one page to another feels more natural."),
        react_1.default.createElement("p", null, "This API/Server dosn't have any autherization or limits on queries per minute. It's made just as a basic example."),
        react_1.default.createElement("p", null,
            react_1.default.createElement("span", { id: "git-text" }, "Github:"),
            react_1.default.createElement("a", { rel: "noopener noreferrer", target: "_blank", href: "https://github.com/elimin8er54/myexample" }, "My Files"))));
}
exports.default = Home;

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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
function Particle(props) {
    react_1.useLayoutEffect(() => {
        let d = document.getElementById(props.value);
        let propY = props.y.b();
        let propX = props.x.b();
        if (d !== null) {
            d.style.left = propX + 'px';
            d.style.top = propY + 'px';
        }
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { id: props.value, className: "particle" })));
}
exports.default = Particle;

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
const Particle_1 = __importDefault(require("./Particle"));
function ParticlePage() {
    const [xMouse, setXMouse] = react_1.useState({ b: () => { } });
    const [yMouse, setYMouse] = react_1.useState({ b: () => { } });
    //Remember when you first mount it means it's the first time it renders. 
    //Re-renders will not call useEffect with square brackets again since it's already mounted
    react_1.useEffect(() => {
        //Called once on mount but not re-render
        document.addEventListener("mousemove", (e) => {
            let propX = e.clientX;
            let propY = e.clientY;
            let posDif = 100;
            //Set and send an object with the function from here so the parent controls what the particles do.
            setXMouse({ b: function () { return Math.random() * ((propX + posDif) - (propX - posDif)) + (propX - posDif); } });
            setYMouse({ b: function () { return Math.random() * ((propY + posDif) - (propY - posDif)) + (propY - posDif); } });
        });
    }, []);
    //Outside gets called every re-render
    const theParticles = [];
    for (let i = 0; i < 10; i++) {
        theParticles.push(react_1.default.createElement(Particle_1.default, { y: yMouse, x: xMouse, value: i }));
    }
    return (react_1.default.createElement(react_1.default.Fragment, null, theParticles));
}
exports.default = ParticlePage;

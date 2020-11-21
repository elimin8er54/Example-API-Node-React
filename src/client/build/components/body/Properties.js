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
const TableContainer_1 = __importDefault(require("../table/TableContainer"));
const config_json_1 = __importDefault(require("../config.json"));
const SearchBox_1 = __importDefault(require("../table/SearchBox"));
function Properties() {
    const [properties, setProperties] = react_1.useState(null);
    const [isLoading, setIsLoading] = react_1.useState(true);
    let theContent;
    let timer;
    react_1.useEffect(() => {
        timer = setInterval(() => {
            loadingCheck();
        }, 10);
        if (isLoading) {
            fetchProperties(-1);
        }
        return () => {
            clearInterval();
        };
    }, []);
    function update(val) {
        fetchProperties(val);
    }
    const headers = ["ID", "Street Number", "Street Name", "Unit Number", "Price"];
    function fetchProperties(val) {
        fetch(`${config_json_1.default.SERVER_URL}properties/search`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token"),
            },
            body: JSON.stringify(val)
        })
            .then((response) => {
            if (response.ok) {
                return response.json();
            }
            else {
                console.log("failed");
            }
        })
            .then((data) => {
            setProperties(data);
        });
    }
    function loadingCheck() {
        setIsLoading(false);
        clearInterval(timer);
    }
    if (isLoading) {
        theContent = "Loading";
    }
    else if (properties) {
        theContent = react_1.default.createElement(TableContainer_1.default, { headVals: headers, colVals: properties });
    }
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("p", null, "These are from the database from the link on the top left"),
        react_1.default.createElement(SearchBox_1.default, { update: update }),
        theContent);
}
exports.default = Properties;

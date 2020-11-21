"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("../../App.css");
const APIBox_1 = __importDefault(require("./APIBox"));
function API(props) {
    let apiBoxes;
    if (props.kind === "property") {
        apiBoxes = [
            react_1.default.createElement(APIBox_1.default, { requestBody: "POST /api/properties", title: "Create a property", kind: props.kind, attributes: [
                    { name: "street_number", type: "String" },
                    { name: "unit_number", type: "String" },
                    { name: "price", type: "decimal" },
                ] }),
            react_1.default.createElement(APIBox_1.default, { requestBody: "GET /api/properties (up to 100) or /api/properties/{property_id}", title: "Get a property", kind: props.kind }),
            react_1.default.createElement(APIBox_1.default, { requestBody: "DELETE /api/properties/{property_id} (Wont actually delete in this test case)", title: "Delete a property", kind: props.kind }),
            react_1.default.createElement(APIBox_1.default, { requestBody: "Patch /api/properties/{property_id}", title: "Update a property", kind: props.kind, attributes: [
                    { name: "street_number", type: "String" },
                    { name: "unit_number", type: "String" },
                    { name: "price", type: "decimal" },
                ] }),
        ];
    }
    else if (props.kind === "landlord") {
        apiBoxes = [
            react_1.default.createElement(APIBox_1.default, { requestBody: "POST /api/landlords", title: "Create a landord", kind: props.kind, attributes: [
                    { name: "first_name", type: "String" },
                    { name: "last_name", type: "String" },
                    { name: "company_name", type: "String" },
                ] }),
            react_1.default.createElement(APIBox_1.default, { requestBody: "GET /api/landlords (up to 100) or /api/landlords/{landlord_id}", title: "Get a landlord", kind: props.kind }),
            react_1.default.createElement(APIBox_1.default, { requestBody: "DELETE /api/landlords  (Wont actually delete in this test case)", title: "Delete a landlord", kind: props.kind }),
            react_1.default.createElement(APIBox_1.default, { requestBody: "Patch /api/landlords/{landlord_id}", title: "Update a landlord", kind: props.kind, attributes: [
                    { name: "first_name", type: "String" },
                    { name: "last_name", type: "String" },
                    { name: "company_name", type: "String" },
                ] }),
        ];
    }
    return react_1.default.createElement(react_1.default.Fragment, null, apiBoxes);
}
exports.default = API;

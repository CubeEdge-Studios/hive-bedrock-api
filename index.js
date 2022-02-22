"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchData = exports.getStats = void 0;
var getStats_1 = __importDefault(require("./src/getStats"));
exports.getStats = getStats_1.default;
var fetchData_1 = __importDefault(require("./src/misc/fetchData"));
exports.fetchData = fetchData_1.default;

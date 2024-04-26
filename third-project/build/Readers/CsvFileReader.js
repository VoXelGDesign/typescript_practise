"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const node_fs_1 = __importDefault(require("node:fs"));
class CsvFileReader {
    constructor(fileName, parser) {
        this.fileName = fileName;
        this.parser = parser;
        this.data = [];
        const rows = node_fs_1.default
            .readFileSync(this.fileName, { encoding: "utf-8" })
            .split("\n");
        const records = rows.map((row) => row.split(","));
        records.forEach((element) => this.data.push(parser(element)));
    }
}
exports.CsvFileReader = CsvFileReader;

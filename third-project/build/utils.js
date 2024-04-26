"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseStringToDate = void 0;
const parseStringToDate = (dateString, separator = "/") => {
    const dateParts = dateString.split(separator).map((value) => {
        return parseInt(value);
    });
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
exports.parseStringToDate = parseStringToDate;

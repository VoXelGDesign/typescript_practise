"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportConsoleDisplayer = void 0;
class ReportConsoleDisplayer {
    display(reportName, reportResult) {
        console.log(`Name: ${reportName} \n`);
        console.log(`Report results:\n${reportResult} \n`);
    }
}
exports.ReportConsoleDisplayer = ReportConsoleDisplayer;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
class Summary {
    constructor(_reader, _analyzer, _displayer) {
        this._reader = _reader;
        this._analyzer = _analyzer;
        this._displayer = _displayer;
    }
    run() {
        const data = this._reader.data;
        const report = this._analyzer.analyze(data);
        this._displayer.display(report.reportName, report.reportResult);
    }
}
exports.Summary = Summary;

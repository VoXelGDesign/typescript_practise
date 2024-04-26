import { Analyzer } from "./Analyzers/Analyzer";
import { ReportDisplayer } from "./ReportDisplayers/ReportDisplayer";
import { Reader } from "./Readers/Reader";

export class Summary<T> {
  constructor(
    private _reader: Reader<T>,
    private _analyzer: Analyzer<T>,
    private _displayer: ReportDisplayer
  ) {}

  public run(): void {
    const data = this._reader.data;
    const report = this._analyzer.analyze(data);
    this._displayer.display(report.reportName, report.reportResult);
  }
}

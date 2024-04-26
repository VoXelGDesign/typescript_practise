import { ReportDisplayer } from "./ReportDisplayer";

export class ReportConsoleDisplayer implements ReportDisplayer {
  public display(reportName: string, reportResult: string): void {
    console.log(`Name: ${reportName} \n`);
    console.log(`Report results: \n ${reportResult} \n`);
  }
}

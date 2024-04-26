export interface Analyzer<T> {
  analyze(data: T[]): { reportName: string; reportResult: string };
}

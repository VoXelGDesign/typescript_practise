import fs from "node:fs";

export class CsvFileReader<T> {
  readonly data: T[] = [];
  constructor(public fileName: string, readonly parser: (row: string[]) => T) {
    const rows = fs
      .readFileSync(this.fileName, { encoding: "utf-8" })
      .split("\n");
    const records = rows.map((row: string): string[] => row.split(","));
    records.forEach((element) => this.data.push(parser(element)));
  }
}

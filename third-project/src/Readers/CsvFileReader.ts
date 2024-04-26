import fs from "node:fs";
import { Reader } from "./Reader";

export class CsvFileReader<T> implements Reader<T> {
  readonly data: T[] = [];
  constructor(public fileName: string, readonly parser: (row: string[]) => T) {
    const rows = fs
      .readFileSync(this.fileName, { encoding: "utf-8" })
      .split("\n");
    const records = rows.map((row: string): string[] => row.split(","));
    records.forEach((element) => this.data.push(parser(element)));
  }
}

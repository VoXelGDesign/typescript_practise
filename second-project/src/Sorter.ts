import { Sortable } from "./Sortable";

export class Sorter {
  constructor(
    public collection: Sortable,
    public comparer: (a: any, b: any) => boolean
  ) {}

  public sort() {
    const length = this.collection.length;

    for (let i = 0; i < length; i++)
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.Compare(j, j + 1, this.comparer)) {
          this.collection.Swap(j, j + 1);
        }
      }
  }
}

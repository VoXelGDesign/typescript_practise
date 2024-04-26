import { Sortable } from "./Sortable";

export abstract class Sorter<T> implements Sortable<T> {
  abstract compare(
    leftElementIndex: number,
    rightElementIndex: number,
    comparer: (a: T, b: T) => boolean
  ): boolean;
  abstract swap(leftElementIndex: number, rightElementIndex: number): void;
  abstract length: number;

  public sort(comparer: (a: T, b: T) => boolean) {
    const { length } = this;

    for (let i = 0; i < length; i++)
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1, comparer)) {
          this.swap(j, j + 1);
        }
      }
  }
}

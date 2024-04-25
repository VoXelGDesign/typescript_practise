import { Sortable } from "./Sortable";

export class SortableArray<T> implements Sortable {
  constructor(public data: T[]) {}

  get length(): number {
    return this.data.length;
  }

  public Swap(leftElementIndex: number, rightElementIndex: number): void {
    const elementToSwap = this.data[leftElementIndex];
    this.data[leftElementIndex] = this.data[rightElementIndex];
    this.data[rightElementIndex] = elementToSwap;
  }

  public Compare(
    leftElementIndex: number,
    rightElementIndex: number,
    comparer: (a: any, b: any) => boolean
  ): boolean {
    return comparer(this.data[leftElementIndex], this.data[rightElementIndex]);
  }
}

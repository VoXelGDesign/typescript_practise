import { Sorter } from "./Sorter";

export class SortableArray<T> extends Sorter<T> {
  constructor(public data: T[]) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  public swap(leftElementIndex: number, rightElementIndex: number): void {
    const elementToSwap = this.data[leftElementIndex];
    this.data[leftElementIndex] = this.data[rightElementIndex];
    this.data[rightElementIndex] = elementToSwap;
  }

  public compare(
    leftElementIndex: number,
    rightElementIndex: number,
    comparer: (a: any, b: any) => boolean
  ): boolean {
    return comparer(this.data[leftElementIndex], this.data[rightElementIndex]);
  }
}

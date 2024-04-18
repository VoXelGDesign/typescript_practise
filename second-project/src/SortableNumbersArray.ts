import { Sortable } from "./Sortable";

export class SortableNumbersArray implements Sortable {
  constructor(public data: number[]) {}

  get length(): number {
    return this.data.length;
  }

  public Swap(leftElementIndex: number, rightElementIndex: number): void {
    const elementToSwap = this.data[leftElementIndex];
    this.data[leftElementIndex] = this.data[rightElementIndex];
    this.data[rightElementIndex] = elementToSwap;
  }

  public Compare(leftElementIndex: number, rightElementIndex: number): boolean {
    return this.data[leftElementIndex] > this.data[rightElementIndex];
  }
}

import { Sortable } from "./Sortable";

export class SortableNumbersArray implements Sortable {
  public length: number;

  constructor(public data: number[]) {
    this.length = data.length;
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

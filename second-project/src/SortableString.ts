import { Sortable } from "./Sortable";

export class SortableString implements Sortable {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  public Swap(leftElementIndex: number, rightElementIndex: number): void {
    const splittedString = this.data.split("");
    const elementToSwap = splittedString[leftElementIndex];
    splittedString[leftElementIndex] = splittedString[rightElementIndex];
    splittedString[rightElementIndex] = elementToSwap;
    this.data = splittedString.join("");
  }

  public Compare(leftElementIndex: number, rightElementIndex: number): boolean {
    return (
      this.data[leftElementIndex].toLowerCase() >
      this.data[rightElementIndex].toLowerCase()
    );
  }
}

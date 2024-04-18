import { Sortable } from "./Sortable";

export class SortableString implements Sortable {
  public length: number;

  constructor(public data: string) {
    this.length = data.length;
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

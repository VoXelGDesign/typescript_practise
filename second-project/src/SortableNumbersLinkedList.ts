import { LinkedList } from "./LinkedList";
import { Sortable } from "./Sortable";

export class SortableNumbersLinkedList implements Sortable {
  constructor(public data: LinkedList<number>) {}

  get length(): number {
    return this.data.length;
  }

  public Swap(leftElementIndex: number, rightElementIndex: number): void {
    this.data.swap(leftElementIndex, rightElementIndex);
  }

  public Compare(leftElementIndex: number, rightElementIndex: number): boolean {
    return this.data.get(leftElementIndex) > this.data.get(rightElementIndex);
  }
}

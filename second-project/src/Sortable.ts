export interface Sortable {
  length: number;
  Compare(leftElementIndex: number, rightElementIndex: number): boolean;
  Swap(leftElementIndex: number, rightElementIndex: number): void;
}

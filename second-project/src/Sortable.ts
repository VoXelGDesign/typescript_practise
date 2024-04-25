export interface Sortable {
  length: number;
  Compare(
    leftElementIndex: number,
    rightElementIndex: number,
    comparer: (a: any, b: any) => boolean
  ): boolean;
  Swap(leftElementIndex: number, rightElementIndex: number): void;
}

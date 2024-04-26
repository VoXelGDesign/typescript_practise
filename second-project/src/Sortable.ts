export interface Sortable<T> {
  length: number;
  compare(
    leftElementIndex: number,
    rightElementIndex: number,
    comparer: (a: T, b: T) => boolean
  ): boolean;
  swap(leftElementIndex: number, rightElementIndex: number): void;
}

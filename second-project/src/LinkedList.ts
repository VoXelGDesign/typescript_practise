import { Sorter } from "./Sorter";

type nullableNode<T> = Node<T> | null;

export class Node<T> {
  nextNode: nullableNode<T> = null;
  constructor(public value: T | null = null) {}
}

export class LinkedList<T> extends Sorter<T> {
  private _length: number = 0;
  private _lastNode: Node<T>;
  private _head: Node<T> = new Node<T>(null);

  constructor() {
    super();
    this._lastNode = this._head;
  }

  public get length(): number {
    return this._length;
  }

  public static createFromArray<T>(array: T[]): LinkedList<T> {
    const list = new LinkedList<T>();
    array.forEach((element) => {
      list.addElement(element);
    });
    return list;
  }

  public getNode(index: number): Node<T> {
    if (this._head.nextNode === null) throw new Error("List is empty");

    if (index < 0 || index >= this.length)
      throw new Error("Index out of bounds");

    let currentNode: nullableNode<T> = this._head.nextNode;

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;
      if (currentNode === null) throw new Error("Element does not exist");
    }
    return currentNode;
  }

  public compare(
    leftElementIndex: number,
    rightElementIndex: number,
    comparer: (a: any, b: any) => boolean
  ): boolean {
    return comparer(this.get(leftElementIndex), this.get(rightElementIndex));
  }

  public swap(leftElementIndex: number, rightElementIndex: number): void {
    let leftNode = this.getNode(leftElementIndex);
    let rightNode = this.getNode(rightElementIndex);

    [leftNode.value, rightNode.value] = [rightNode.value, leftNode.value];
  }

  public get(index: number): T {
    const node = this.getNode(index);
    if (node.value === null) throw new Error("Value was null");
    return node.value;
  }

  public addElement(value: T): void {
    this._lastNode.nextNode = new Node(value);
    this._lastNode = this._lastNode.nextNode;
    this._length++;
  }

  public print(): void {
    let arrayOfElementsFromList: T[] = [];

    let currentNode: nullableNode<T> = this._head;

    while (currentNode !== null) {
      if (currentNode.value === null) {
        currentNode = currentNode.nextNode;
        continue;
      }

      arrayOfElementsFromList.push(currentNode.value);
      currentNode = currentNode.nextNode;
    }

    console.log(arrayOfElementsFromList);
  }
}

type nullableNode<T> = Node<T> | null;

export class Node<T> {
  nextNode: nullableNode<T> = null;
  constructor(public value: T | null = null) {}
}

export class LinkedList<T> {
  private currentNode: Node<T>;
  public head: Node<T> = new Node<T>(null);

  constructor() {
    this.currentNode = this.head;
  }

  public AddElement(value: T): void {
    this.currentNode.nextNode = new Node(value);
    this.currentNode = this.GetNextElement()!;
  }

  private GetNextElement(): nullableNode<T> {
    return this.currentNode.nextNode;
  }

  public print(): void {
    let arrayOfElementsFromList: T[] = [];

    const lastPosition = this.currentNode;

    this.currentNode = this.head;

    while (this.GetNextElement() !== null) {
      if (this.currentNode.value !== null) {
        arrayOfElementsFromList.push(this.currentNode.value);

        if (this.GetNextElement() !== null) {
          this.currentNode = this.GetNextElement()!;
          arrayOfElementsFromList.push(this.currentNode.value!);
        }
      }
    }

    console.log(arrayOfElementsFromList);

    this.currentNode = lastPosition;
  }
}

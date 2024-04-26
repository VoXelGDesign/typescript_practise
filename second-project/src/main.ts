import { LinkedList } from "./LinkedList";
import { SortableArray } from "./SortableArray";

const soratbleNumbers = new SortableArray([10, 3, -5, 0]);
const soratbleString = new SortableArray(
  "QWERTYuiopasdfghjklzxcvbnm".split("")
);

const comaprerForStrings = (a: string, b: string) =>
  a.toLocaleLowerCase() > b.toLocaleLowerCase();

soratbleNumbers.sort((a, b) => a > b);
soratbleString.sort(comaprerForStrings);

console.log(soratbleNumbers);
console.log(soratbleString);

const listNumbers = LinkedList.createFromArray([1, -3, 2, -10]);
listNumbers.sort((a, b) => a > b);
listNumbers.print();

const listString = LinkedList.createFromArray("QWERTYasbcude".split(""));

listString.sort(comaprerForStrings);

listString.print();

import { LinkedList } from "./LinkedList";
import { SortableArray } from "./SortableArray";
import { Sorter } from "./Sorter";
const soratbleNumbers = new SortableArray([10, 3, -5, 0]);
const soratbleString = new SortableArray(
  "QWERTYuiopasdfghjklzxcvbnm".split("")
);

let sorter = new Sorter(soratbleNumbers, (a, b) => a > b);
sorter.sort();
console.log(sorter.collection);

sorter = new Sorter(
  soratbleString,
  (a: string, b: string) => a.toLowerCase() > b.toLowerCase()
);
sorter.sort();

console.log(sorter.collection);

const list = LinkedList.createFromArray([0, -5, 10, 3]);

console.log(list);
list.print();
console.log(list.length);
console.log(list.get(2));

list.Swap(1, 2);
console.log(list);
list.print();

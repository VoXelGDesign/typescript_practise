import { LinkedList } from "./LinkedList";
import { SortableNumbersArray } from "./SortableNumbersArray";
//import { SortableNumbersLinkedList } from "./SortableNumbersLinkedList";
import { SortableString } from "./SortableString";
import { Sorter } from "./Sorter";
const soratbleNumbers = new SortableNumbersArray([10, 3, -5, 0]);
const soratbleString = new SortableString("QWERTYuiopasdfghjklzxcvbnm");

let sorter = new Sorter(soratbleNumbers);
sorter.sort();
console.log(sorter.collection);

sorter = new Sorter(soratbleString);
sorter.sort();
console.log(sorter.collection);

const list = new LinkedList<number>();

list.addElement(0);
list.addElement(-5);
list.addElement(10);
list.addElement(3);
console.log(list);
list.print();
console.log(list.length);
console.log(list.get(2));

list.swap(1, 2);
console.log(list);
list.print();
// const sortablellnum = new SortableNumbersLinkedList(list);

// sorter = new Sorter(sortablellnum);
// sorter.sort();

// sortablellnum.data.print();

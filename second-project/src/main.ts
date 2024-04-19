import { LinkedList } from "./LinkedList";
import { SortableNumbersArray } from "./SortableNumbersArray";
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

const list = new LinkedList<string>();

list.AddElement("zupa");
list.AddElement("jest");
list.AddElement("niedobra");
console.log(list);
list.print();

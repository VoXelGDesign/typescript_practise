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

import fs from "node:fs";

const file = fs.readFileSync("football.csv", { encoding: "utf-8" });

console.log(file);

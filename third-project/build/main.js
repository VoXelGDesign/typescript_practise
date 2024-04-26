"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const utils_1 = require("./utils");
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
const reader = new CsvFileReader_1.CsvFileReader("football.csv", (record) => {
    const mapped = {
        date: (0, utils_1.parseStringToDate)(record[0]),
        homeTeam: record[1],
        awayTeam: record[2],
        homeTeamScore: Number.parseInt(record[3]),
        awayTeamScore: Number.parseInt(record[4]),
        matchResult: record[5] === "H"
            ? MatchResult.HomeWin
            : record[5] === "A"
                ? MatchResult.AwayWin
                : MatchResult.Draw,
        city: record[6],
    };
    return mapped;
});
console.log(reader.data);
let manUnitedWins = 0;
reader.data.forEach((match) => {
    if (match.homeTeam === "Man United" &&
        match.matchResult === MatchResult.HomeWin)
        manUnitedWins++;
    else if (match.awayTeam === "Man United" &&
        match.matchResult === MatchResult.AwayWin)
        manUnitedWins++;
});
console.log(`Manchester united won ${manUnitedWins} games`);

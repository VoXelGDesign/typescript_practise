"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./Readers/CsvFileReader");
const utils_1 = require("./utils");
const MatchData_1 = require("./MatchData");
const Summary_1 = require("./Summary");
const MatchWinsAnalyzer_1 = require("./Analyzers/MatchWinsAnalyzer");
const ReportConsoleDisplayer_1 = require("./ReportDisplayers/ReportConsoleDisplayer");
const reader = new CsvFileReader_1.CsvFileReader("football.csv", (record) => {
    const mapped = {
        date: (0, utils_1.parseStringToDate)(record[0]),
        homeTeam: record[1],
        awayTeam: record[2],
        homeTeamScore: Number.parseInt(record[3]),
        awayTeamScore: Number.parseInt(record[4]),
        matchResult: record[5],
        city: record[6],
    };
    return mapped;
});
console.log(reader.data[0]);
let manUnitedWins = 0;
reader.data.forEach((match) => {
    if (match.homeTeam === "Man United" &&
        match.matchResult === MatchData_1.MatchResult.HomeWin)
        manUnitedWins++;
    else if (match.awayTeam === "Man United" &&
        match.matchResult === MatchData_1.MatchResult.AwayWin)
        manUnitedWins++;
});
console.log(`Manchester united won ${manUnitedWins} games`);
const matchWinAnalyzer = new MatchWinsAnalyzer_1.MatchWinAnalyzer();
const displayer = new ReportConsoleDisplayer_1.ReportConsoleDisplayer();
const summary = new Summary_1.Summary(reader, matchWinAnalyzer, displayer);
summary.run();

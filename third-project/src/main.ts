import fs from "node:fs";
import { CsvFileReader } from "./Readers/CsvFileReader";
import { parseStringToDate } from "./utils";
import { MatchData, MatchResult } from "./MatchData";
import { Summary } from "./Summary";
import { MatchWinAnalyzer } from "./Analyzers/MatchWinsAnalyzer";
import { ReportConsoleDisplayer } from "./ReportDisplayers/ReportConsoleDisplayer";

const reader = new CsvFileReader<MatchData>("football.csv", (record) => {
  const mapped: MatchData = {
    date: parseStringToDate(record[0]),
    homeTeam: record[1],
    awayTeam: record[2],
    homeTeamScore: Number.parseInt(record[3]),
    awayTeamScore: Number.parseInt(record[4]),
    matchResult: record[5] as MatchResult,
    city: record[6],
  };

  return mapped;
});

console.log(reader.data[0]);

let manUnitedWins = 0;

reader.data.forEach((match) => {
  if (
    match.homeTeam === "Man United" &&
    match.matchResult === MatchResult.HomeWin
  )
    manUnitedWins++;
  else if (
    match.awayTeam === "Man United" &&
    match.matchResult === MatchResult.AwayWin
  )
    manUnitedWins++;
});

console.log(`Manchester united won ${manUnitedWins} games`);

const matchWinAnalyzer = new MatchWinAnalyzer();
const displayer = new ReportConsoleDisplayer();
const summary = new Summary(reader, matchWinAnalyzer, displayer);

summary.run();

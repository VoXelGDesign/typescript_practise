import fs from "node:fs";
import { CsvFileReader } from "./CsvFileReader";
import { Cipher } from "node:crypto";
import { parseStringToDate } from "./utils";
enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

type TempType = {
  date: Date;
  homeTeam: string;
  awayTeam: string;
  homeTeamScore: number;
  awayTeamScore: number;
  matchResult: MatchResult;
  city: string;
};

const reader = new CsvFileReader<TempType>("football.csv", (record) => {
  const mapped: TempType = {
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

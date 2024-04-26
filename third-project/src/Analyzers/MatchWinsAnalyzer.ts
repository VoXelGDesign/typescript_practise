import { MatchData, MatchResult } from "../MatchData";
import { Analyzer } from "./Analyzer";

export class MatchWinAnalyzer implements Analyzer<MatchData> {
  public analyze(data: MatchData[]): {
    reportName: string;
    reportResult: string;
  } {
    let wins: { [key: string]: number } = {};

    data.forEach((item) => {
      if (item.matchResult === MatchResult.HomeWin) {
        if (isNaN(wins[item.homeTeam])) wins[item.homeTeam] = 0;
        wins[item.homeTeam] += 1;
      } else if (item.matchResult === MatchResult.AwayWin) {
        if (isNaN(wins[item.awayTeam])) wins[item.awayTeam] = 0;
        wins[item.awayTeam] += 1;
        console.log(wins[item.awayTeam]);
      }
    });

    const results: string[] = [];

    for (let key in wins) {
      results.push(`Team ${key} won ${wins[key]} games \n`);
    }

    return { reportName: "Wins for every match", reportResult: results.join() };
  }
}

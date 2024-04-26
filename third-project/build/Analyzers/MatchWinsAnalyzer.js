"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchWinAnalyzer = void 0;
const MatchData_1 = require("../MatchData");
class MatchWinAnalyzer {
    analyze(data) {
        let wins = {};
        data.forEach((item) => {
            if (item.matchResult === MatchData_1.MatchResult.HomeWin) {
                if (isNaN(wins[item.homeTeam]))
                    wins[item.homeTeam] = 0;
                wins[item.homeTeam] += 1;
            }
            else if (item.matchResult === MatchData_1.MatchResult.AwayWin) {
                if (isNaN(wins[item.awayTeam]))
                    wins[item.awayTeam] = 0;
                wins[item.awayTeam] += 1;
                console.log(wins[item.awayTeam]);
            }
        });
        const results = [];
        for (let key in wins) {
            results.push(`Team ${key} won ${wins[key]} games \n`);
        }
        return { reportName: "Wins for every match", reportResult: results.join() };
    }
}
exports.MatchWinAnalyzer = MatchWinAnalyzer;

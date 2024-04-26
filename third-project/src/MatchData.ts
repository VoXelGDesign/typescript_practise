export enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

export type MatchData = {
  date: Date;
  homeTeam: string;
  awayTeam: string;
  homeTeamScore: number;
  awayTeamScore: number;
  matchResult: MatchResult;
  city: string;
};

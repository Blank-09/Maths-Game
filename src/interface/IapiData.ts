export interface IAPIData {
  success?: string;
  reason?: string;
  data: LeaderboardAPIData[];
}

interface LeaderboardAPIData {
  name: string;
  score: number;
}

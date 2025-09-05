// Leaderboard types extracted from swagger.json

import { UserSimple } from "../championships/types";

export interface Leaderboard {
  competition_id: string;
  competition_type: string;
  end_date: number;
  game_id: string;
  group: number;
  leaderboard_id: string;
  leaderboard_mode: string;
  leaderboard_name: string;
  leaderboard_type: string;
  min_matches: number;
  points_per_draw: number;
  points_per_loss: number;
  points_per_win: number;
  points_type: string;
  ranking_boost: number;
  ranking_type: string;
  region: string;
  round: number;
  season: number;
  start_date: number;
  starting_points: number;
  status: string;
}

export interface LeaderboardsList {
  end: number;
  items: Leaderboard[];
  start: number;
}

export interface Ranking {
  current_streak: number;
  draw: number;
  lost: number;
  played: number;
  player: UserSimple;
  points: number;
  position: number;
  win_rate: number;
  won: number;
}

export interface EntityRanking {
  end: number;
  items: Ranking[];
  leaderboard: Leaderboard;
  start: number;
}

export interface Promotion {
  points: number;
}

export interface Relegation {
  consecutive_losses: number;
}

export interface LeaderboardConfig {
  max_players: number;
  points_per_loss: number;
  points_per_win: number;
  promotion: Promotion;
  relegation: Relegation;
  starting_points: number;
}

// Request parameter types
export interface GetLeaderboardsParams {
  offset?: number;
  limit?: number;
}

export interface GetChampionshipLeaderboardsParams {
  offset?: number;
  limit?: number;
}

export interface GetChampionshipGroupRankingParams {
  offset?: number;
  limit?: number;
}

export interface GetHubLeaderboardsParams {
  offset?: number;
  limit?: number;
}

export interface GetHubRankingParams {
  offset?: number;
  limit?: number;
}

export interface GetHubSeasonRankingParams {
  offset?: number;
  limit?: number;
}

export interface GetLeaderboardParams {
  offset?: number;
  limit?: number;
}
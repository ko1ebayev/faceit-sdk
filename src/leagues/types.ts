// League types extracted from swagger.json

import { LeaderboardConfig } from "../leaderboards/types";

export interface Assets {
  color: string;
  icon: string;
  image: string;
}

export interface Tier {
  name: string;
  points_target: number;
  rank: number;
}

export interface Division {
  assets: Assets;
  config_type: string; // Can be 'nested' or 'classic'
  leaderboard_config: LeaderboardConfig;
  leaderboards: string[];
  max_elo: number;
  min_elo: number;
  name: string;
  tiers: Tier[];
  type: string;
}

export interface Season {
  end_date: string; // date-time format
  number: number;
  placement_match_count: number;
  start_date: string; // date-time format
}

export interface League {
  divisions: Division[];
  game: string;
  id: string;
  min_matches: number;
  region: string;
  season: Season;
}

export interface SeasonDetailed {
  divisions: Division[];
  season: Season;
}

export interface PlayerInLeague {
  division_name: string;
  division_tier: string;
  division_type: string;
  leaderboard_id: string;
  points: number;
  position: number;
}
import { Match, MatchResult, DetailedMatchResult, Faction } from '../shared/types';

export { Match, MatchResult, DetailedMatchResult, Faction };

// Match details response
export type MatchDetails = Match;

// Player stats in a team
export interface PlayerStatsSimple {
  player_id: string;
  nickname: string;
  [key: string]: string | number | boolean;
}

// Team stats in a round
export interface TeamStatsSimple {
  team_id: string;
  premade: boolean;
  team_stats: Record<string, string | number | boolean>;
  players: PlayerStatsSimple[];
}

// Round statistics
export interface RoundStats {
  best_of: string | number;
  competition_id: string;
  game_id: string;
  game_mode: string;
  match_id: string;
  match_round: string | number;
  played: string | number;
  round_stats: Record<string, string | number | boolean>;
  teams: TeamStatsSimple[];
}

// Match stats response
export interface MatchStats {
  rounds: RoundStats[];
}
import { Game, Organizer, MatchResult, MatchList, TournamentsList, TournamentSimple } from '../shared/types';

export interface Tournament {
  tournament_id: string;
  competition_id?: string;
  name: string;
  game_id: string;
  region: string;
  status: string;
  started_at: number;
  custom: boolean;
  anticheat_required: boolean;
  best_of: any;
  calculate_elo: boolean;
  cover_image: string;
  description: string;
  faceit_url: string;
  featured_image: string;
  invite_type: string;
  match_type: string;
  max_skill: number;
  min_skill: number;
  membership_type: string;
  number_of_players: number;
  number_of_players_checkedin: number;
  number_of_players_joined: number;
  number_of_players_participants: number;
  organizer_id: string;
  prize_type: string;
  rule: string;
  substitutes_allowed: number;
  substitutions_allowed: number;
  team_size: number;
  total_prize: any;
  voting: any;
  whitelist_countries: string[];
  rounds: any[];
  game_data?: Game;
  organizer_data?: Organizer;
}

export interface TournamentTeam {
  team_id: string;
  nickname: string;
  skill_level: number;
  team_leader: string;
  team_type: string;
  subs_done: number;
}

export interface TournamentTeams {
  checked_in: TournamentTeam[];
  finished: TournamentTeam[];
  joined: TournamentTeam[];
  started: TournamentTeam[];
}

export interface BracketsFaction {
  team_id: string;
  nickname: string;
  avatar: string;
}

export interface BracketsMatch {
  match_id: string;
  faceit_url: string;
  position: number;
  round: number;
  state: string;
  teams: Record<string, BracketsFaction>;
  results?: MatchResult;
}

export interface BracketsRound {
  round: number;
  label: string;
  best_of: number;
  matches: number;
}

export interface Brackets {
  game: string;
  name: string;
  status: string;
  rounds: BracketsRound[];
  matches: BracketsMatch[];
}

export interface GetTournamentsParams {
  game?: string;
  region?: string;
  offset?: number;
  limit?: number;
}

export interface GetTournamentParams {
  expanded?: ('organizer' | 'game')[];
}

export interface GetTournamentMatchesParams {
  offset?: number;
  limit?: number;
}

export interface GetTournamentTeamsParams {
  offset?: number;
  limit?: number;
}

export { TournamentsList, TournamentSimple };
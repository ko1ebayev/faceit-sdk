// Hub types extracted from swagger.json

import {
  Game as SharedGame,
  Organizer as SharedOrganizer,
  DetailedMatchResult,
  Faction as SharedFaction,
  Roster as SharedRoster
} from '../shared/types';

export { DetailedMatchResult };

export interface Hub {
  avatar: string;
  background_image: string;
  chat_room_id: string;
  cover_image: string;
  description: string;
  faceit_url: string;
  game_data?: Game;
  game_id: string;
  hub_id: string;
  join_permission: string;
  max_skill_level: number;
  min_skill_level: number;
  name: string;
  organizer_data?: Organizer;
  organizer_id: string;
  players_joined: number;
  region: string;
  rule_id: string;
}

export interface HubSmall {
  avatar: string;
  faceit_url: string;
  game_id: string;
  hub_id: string;
  name: string;
  organizer_id: string;
}

export interface HubUser {
  avatar: string;
  faceit_url: string;
  nickname: string;
  roles: string[];
  user_id: string;
}

export interface HubMembers {
  end: number;
  items: HubUser[];
  start: number;
}

export interface Role {
  color: string;
  name: string;
  ranking: number;
  role_id: string;
  visible_on_chat: boolean;
}

export interface RolesList {
  end: number;
  items: Role[];
  start: number;
}

export interface Rules {
  body: string;
  game: string;
  name: string;
  organizer: string;
  rule_id: string;
}

export interface StatsCompetitionPlayer {
  nickname: string;
  player_id: string;
  stats: Record<string, any>;
}

export interface HubStats {
  game_id: string;
  players: StatsCompetitionPlayer[];
}

// Hub-specific MatchResult with only Record<string, number> score
export interface MatchResult {
  score: Record<string, number>;
  winner: string;
}

// Hub uses same Faction and Roster as shared
export type Faction = SharedFaction;
export type Roster = SharedRoster;

export interface Match {
  best_of: number;
  broadcast_start_time: number;
  broadcast_start_time_label: string;
  calculate_elo: boolean;
  chat_room_id: string;
  competition_id: string;
  competition_name: string;
  competition_type: string;
  configured_at: number;
  demo_url: string[];
  detailed_results: DetailedMatchResult[];
  faceit_url: string;
  finished_at: number;
  game: string;
  group: number;
  match_id: string;
  organizer_id: string;
  region: string;
  results: MatchResult;
  round: number;
  scheduled_at: number;
  started_at: number;
  status: string;
  teams: Record<string, Faction>;
  version: number;
  voting?: any;
}

export interface MatchList {
  end: number;
  items: Match[];
  start: number;
}

export interface HubsList {
  end: number;
  items: Hub[];
  start: number;
}

// Use shared Game and Organizer types
export type Game = SharedGame;
export type Organizer = SharedOrganizer;

// Request parameter types
export type HubMatchType = 'all' | 'upcoming' | 'ongoing' | 'past';
export type HubExpandedEntity = 'organizer' | 'game';

export interface GetHubMatchesParams {
  type?: HubMatchType;
  offset?: number;
  limit?: number;
}

export interface GetHubMembersParams {
  offset?: number;
  limit?: number;
}

export interface GetHubRolesParams {
  offset?: number;
  limit?: number;
}

export interface GetHubStatsParams {
  offset?: number;
  limit?: number;
}

export interface GetHubParams {
  expanded?: HubExpandedEntity[];
}
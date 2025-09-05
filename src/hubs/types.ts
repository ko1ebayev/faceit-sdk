// Hub types extracted from swagger.json

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

export interface MatchResult {
  score: Record<string, number>;
  winner: string;
}

export interface DetailedMatchResult {
  // This is referenced but not fully defined in visible schema
  // Will need to be expanded if needed
  [key: string]: any;
}

export interface Faction {
  faction_id: string;
  leader: string;
  avatar: string;
  roster: Roster[];
  substituted: boolean;
  name: string;
  type: string;
}

export interface Roster {
  anticheat_required: boolean;
  avatar: string;
  game_player_id: string;
  game_player_name: string;
  game_skill_level: number;
  membership: string;
  nickname: string;
  player_id: string;
}

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

// Minimal types for referenced entities
export interface Game {
  // Minimal game info - extend as needed
  game_id: string;
  name?: string;
  [key: string]: any;
}

export interface Organizer {
  // Minimal organizer info - extend as needed
  organizer_id: string;
  name?: string;
  [key: string]: any;
}

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
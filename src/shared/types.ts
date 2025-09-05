import { Nullable } from '../core/nullable';

// User related types
export interface UserSimple {
  user_id: string;
  nickname: string;
  avatar: string;
  country: string;
  faceit_url: string;
  membership_type?: string;
  memberships: string[];
  skill_level: number;
}

// Game related types
export interface GameAssets {
  cover: string;
  featured_img_s: string;
  featured_img_m: string;
  featured_img_l: string;
  flag_img_icon: string;
  flag_img_s: string;
  flag_img_m: string;
  flag_img_l: string;
  landing_page?: string;
}

export interface Game {
  game_id: string;
  short_label: string;
  long_label: string;
  order?: number;
  parent_game_id?: string;
  platforms?: string[];
  regions?: string[];
  assets: GameAssets;
}

export interface GameSimple {
  game_id: string;
  short_label: string;
  long_label: string;
  assets: {
    cover: string;
    featured_img_s: string;
    featured_img_m: string;
    featured_img_l: string;
    flag_img_icon: string;
    flag_img_s: string;
    flag_img_m: string;
    flag_img_l: string;
  };
}

// Team related types
export interface Team {
  team_id: string;
  name: string;
  nickname: string;
  avatar: string;
  game: string;
  faceit_url: string;
  cover_image: string;
  description: string;
  facebook: string;
  twitter: string;
  youtube: string;
  website: string;
  leader: string;
  chat_room_id: string;
  team_type: string;
  members: UserSimple[];
}

export interface TeamSimple {
  team_id: string;
  nickname: string;
  avatar?: string;
  skill_level?: number;
}

// Tournament related types
export interface TournamentSimple {
  tournament_id: string;
  name: string;
  game_id: string;
  region: string;
  status: string;
  started_at: number;
  finished_at: Nullable<number>;
  total_prize: Nullable<{
    value: number;
    currency: string;
  }>;
  players_joined: number;
  players_checkedin: number;
  slots: number;
}

export interface TournamentsList {
  items: TournamentSimple[];
  start: number;
  end: number;
}

// Championship related types
export interface ChampionshipSimple {
  championship_id: string;
  name: string;
  game_id: string;
  region: string;
  status: string;
  started_at: number;
  finished_at: Nullable<number>;
  total_prize: Nullable<{
    value: number;
    currency: string;
  }>;
  players_joined: number;
  players_checkedin: number;
  slots: number;
}

export interface ChampionshipsList {
  items: ChampionshipSimple[];
  start: number;
  end: number;
}

// Hub related types
export interface HubSimple {
  hub_id: string;
  name: string;
  game_id: string;
  region: string;
  chat_room_id: string;
  organizer_id: string;
  faceit_url: string;
}

export interface HubsList {
  items: HubSimple[];
  start: number;
  end: number;
}

// Organizer related types
export interface Organizer {
  organizer_id: string;
  name: string;
  partner: boolean;
  avatar: string;
  cover: string;
  description: string;
  facebook: string;
  twitter: string;
  youtube: string;
  website: string;
  faceit_url: string;
}

// Match related types
export interface MatchResult {
  winner: string;
  score: Record<string, number> | {
    faction1: number;
    faction2: number;
  };
}

export interface DetailedMatchResult {
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
  player_id: string;
  nickname: string;
  avatar: string;
  membership: string;
  game_player_id: string;
  game_player_name: string;
  game_skill_level: number;
  anticheat_required: boolean;
}

export interface Match {
  match_id: string;
  version: number;
  game: string;
  region: string;
  competition_id: string;
  competition_type: string;
  competition_name: string;
  organizer_id: string;
  teams: {
    faction1: Faction;
    faction2: Faction;
  };
  voting?: any;
  calculate_elo: boolean;
  configured_at: number;
  started_at: number;
  finished_at: number;
  demo_url: string[];
  chat_room_id: string;
  best_of: number;
  results: MatchResult;
  detailed_results?: any[];
  status: string;
  faceit_url: string;
}

export interface MatchList {
  items: Match[];
  start: number;
  end: number;
}

// Lists types
export interface GamesList {
  items: GameSimple[];
  start: number;
  end: number;
}
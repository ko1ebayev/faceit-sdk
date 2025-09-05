import { Nullable } from "../core/nullable";

export interface PlayerDetailsDTO {
  activated_at: string;
  avatar: string;
  country: string;
  cover_featured_image: string;
  cover_image: string;
  faceit_url: string;
  friends_ids: string[];
  games: {
    [game_id: string]: {};
  };
  infractions: Nullable<string>;
  membership_type: string;
  memberships: string[];
  new_steam_id: string;
  nickname: string;
  platforms: {
    property1: string;
    property2: string;
  };
  player_id: string;
  settings: {
    language: string;
  };
  steam_id_64: string;
  steam_nickname: string;
  verified: boolean;
}

export interface PlayerBanDto {
  id: string;
  type: string;
  reason: string;
  starts_at: string;
  ends_at: string;
}

export interface PlayerHubDTO {
  hub_id: string;
  name: string;
  avatar: string;
  game_id: string;
  organizer_id: string;
  faceit_url: string;
}

export interface PlayerMatchDTO {
  match_id: string;
  game_id: string;
  region: string;
  match_type: string;
  game_mode: string;
  started_at: number;
  finished_at: number;
  results: {
    winner: string;
    score: {
      faction1: number;
      faction2: number;
    };
  };
  players: Array<{
    player_id: string;
    nickname: string;
    avatar: string;
    skill_level: number;
    game_player_id: string;
    game_player_name: string;
    faction_id: string;
  }>;
  faction1: {
    faction_id: string;
    leader: string;
    avatar: string;
    roster: Array<any>;
    substituted: boolean;
    name: string;
    type: string;
  };
  faction2: {
    faction_id: string;
    leader: string;
    avatar: string;
    roster: Array<any>;
    substituted: boolean;
    name: string;
    type: string;
  };
}

export interface PlayerTeamDTO {
  team_id: string;
  name: string;
  avatar: string;
  game: string;
  faceit_url: string;
  verified: boolean;
}

export interface PlayerTournamentDTO {
  tournament_id: string;
  name: string;
  game_id: string;
  region: string;
  status: string;
  started_at: number;
  finished_at: number;
}

export interface PlayerDetails {
  activated_at: string;
  avatar: string;
  country: string;
  cover_featured_image: string;
  cover_image: string;
  faceit_url: string;
  friends_ids: string[];
  games: {
    [game_id: string]: {};
  };
  infractions: Nullable<string>;
  membership_type: string;
  memberships: string[];
  new_steam_id: string;
  nickname: string;
  platforms: {
    property1: string;
    property2: string;
  };
  player_id: string;
  settings: {
    language: string;
  };
  steam_id_64: string;
  steam_nickname: string;
  verified: boolean;
}
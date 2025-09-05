// Championship types extracted from swagger.json

import { Game, Organizer } from "../hubs/types";

export interface Championship {
  anticheat_required: boolean;
  avatar: string;
  background_image: string;
  championship_id: string;
  championship_start: number;
  checkin_clear: number;
  checkin_enabled: boolean;
  checkin_start: number;
  cover_image: string;
  current_subscriptions: number;
  description: string;
  faceit_url: string;
  featured: boolean;
  full: boolean;
  game_data?: Game;
  game_id: string;
  id?: string; // Deprecated: use championship_id instead
  join_checks: JoinCheck;
  name: string;
  organizer_data?: Organizer;
  organizer_id: string;
  prizes: Prize[];
  region: string;
  rules_id: string;
  schedule: Record<string, ChampionshipSchedule>;
  screening: ChampionshipScreening;
  seeding_strategy: string;
  slots: number;
  status: string;
  stream: ChampionshipStream;
  subscription_end: number;
  subscription_start: number;
  subscriptions_locked: boolean;
  substitution_configuration: SubstitutionConfiguration;
  total_groups: number;
  total_prizes: number;
  total_rounds: number;
  type: string;
}

export interface JoinCheck {
  allowed_team_types: string[];
  blacklist_geo_countries: string[];
  join_policy: string;
  max_skill_level: number;
  membership_type: string;
  min_skill_level: number;
  whitelist_geo_countries: string[];
  whitelist_geo_countries_min_players: number;
}

export interface Prize {
  faceit_points: number;
  rank: number;
}

export interface ChampionshipSchedule {
  date: number;
  status: string;
}

export interface ChampionshipScreening {
  enabled: boolean;
  id: string;
}

export interface ChampionshipStream {
  active: boolean;
  platform: string;
  source: string;
  title: string;
}

export interface SubstitutionConfiguration {
  max_substitutes: number;
  max_substitutions: number;
}

export interface ChampionshipBounds {
  left: number;
  right: number;
}

export interface ChampionshipPlacement {
  id: string;
  name: string;
  type: string;
}

export interface ChampionshipPlacementGroup {
  bounds: ChampionshipBounds;
  placements: ChampionshipPlacement[];
}

export interface ChampionshipResultList {
  end: number;
  items: ChampionshipPlacementGroup[];
  start: number;
}

export interface Team {
  avatar: string;
  chat_room_id: string;
  cover_image: string;
  description: string;
  facebook: string;
  faceit_url: string;
  game: string;
  leader: string;
  members: UserSimple[];
  name: string;
  nickname: string;
  players: string[];
  team_id: string;
  team_type: string;
  twitter: string;
  website: string;
  youtube: string;
}

export interface UserSimple {
  avatar: string;
  country: string;
  faceit_url: string;
  nickname: string;
  skill_level: number;
  skill_level_label: string;
  user_id: string;
  verified: boolean;
}

export interface ChampionshipSubscription {
  coach: string;
  coleader: string;
  group: number;
  leader: string;
  roster: string[];
  status: string;
  substitutes: string[];
  team: Team;
}

export interface ChampionshipSubscriptionsList {
  end: number;
  items: ChampionshipSubscription[];
  start: number;
}

export interface ChampionshipsList {
  end: number;
  items: Championship[];
  start: number;
}

// Re-use MatchList from hubs module since it's the same structure
export { MatchList } from "../hubs/types";

// Request parameter types
export type ChampionshipType = 'all' | 'upcoming' | 'ongoing' | 'past';
export type ChampionshipExpandedEntity = 'organizer' | 'game';

export interface GetChampionshipsParams {
  game: string; // Required
  type?: ChampionshipType;
  offset?: number;
  limit?: number;
}

export interface GetChampionshipParams {
  expanded?: ChampionshipExpandedEntity[];
}

export interface GetChampionshipMatchesParams {
  type?: ChampionshipType;
  offset?: number;
  limit?: number;
}

export interface GetChampionshipResultsParams {
  offset?: number;
  limit?: number;
}

export interface GetChampionshipSubscriptionsParams {
  offset?: number;
  limit?: number;
}
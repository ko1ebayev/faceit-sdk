export interface CompetitionSearch {
  competition_id: string;
  competition_type: string;
  game: string;
  name: string;
  region: string;
  organizer_id: string;
  organizer_name: string;
  organizer_type: string;
  players_joined: number;
  players_checkedin: number;
  slots: number;
  number_of_members: number;
  prize_type: string;
  total_prize: string;
  started_at: number;
  status: string;
}

export interface CompetitionsSearchList {
  items: CompetitionSearch[];
  start: number;
  end: number;
}

export interface ClanSearch {
  id: string;
  name: string;
  avatar: string;
  game: string;
  region: string;
  type: string;
  join: string;
  organizer_id: string;
  members_count: number;
  members_count_24h: number;
  matches_count_24h: number;
  min_skill_level: number;
  max_skill_level: number;
  last_match_finished: string;
}

export interface ClansSearchList {
  items: ClanSearch[];
  start: number;
  end: number;
}

export interface OrganizerSearch {
  organizer_id: string;
  name: string;
  avatar: string;
  partner: boolean;
  active: boolean;
  games: string[];
  regions: string[];
  countries: string[];
}

export interface OrganizersSearchList {
  items: OrganizerSearch[];
  start: number;
  end: number;
}

export interface GameUserSearch {
  name: string;
  skill_level: string;
}

export interface UserSearch {
  player_id: string;
  nickname: string;
  avatar: string;
  country: string;
  status: string;
  verified: boolean;
  games: GameUserSearch[];
}

export interface UsersSearchList {
  items: UserSearch[];
  start: number;
  end: number;
}

export interface TeamSearch {
  team_id: string;
  name: string;
  avatar: string;
  game: string;
  faceit_url: string;
  chat_room_id: string;
  verified: boolean;
}

export interface TeamsSearchList {
  items: TeamSearch[];
  start: number;
  end: number;
}

export interface SearchChampionshipsParams {
  name: string;
  game?: string;
  region?: string;
  type?: 'all' | 'upcoming' | 'ongoing' | 'past';
  offset?: number;
  limit?: number;
}

export interface SearchClansParams {
  name: string;
  game?: string;
  region?: string;
  offset?: number;
  limit?: number;
}

export interface SearchHubsParams {
  name: string;
  game?: string;
  region?: string;
  offset?: number;
  limit?: number;
}

export interface SearchOrganizersParams {
  name: string;
  offset?: number;
  limit?: number;
}

export interface SearchPlayersParams {
  nickname: string;
  game?: string;
  country?: string;
  offset?: number;
  limit?: number;
}

export interface SearchTeamsParams {
  nickname: string;
  game?: string;
  offset?: number;
  limit?: number;
}

export interface SearchTournamentsParams {
  name: string;
  game?: string;
  region?: string;
  type?: 'all' | 'upcoming' | 'ongoing' | 'past';
  offset?: number;
  limit?: number;
}
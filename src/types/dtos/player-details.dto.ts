import { Nullable } from "../common/nullable";

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

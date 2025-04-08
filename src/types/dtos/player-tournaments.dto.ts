import { Nullable } from "../common/nullable";

export type PlayerTournamentsDTO = {
  end: number;
  start: number;
  items: Array<{
    anticheat_required: boolean;
    custom: boolean;
    faceit_url: string;
    featured_image: string;
    game_id: string;
    invite_type: string;
    match_type: string;
    max_skill: number;
    membership_type: string;
    min_skill: number;
    name: string;
    number_of_players: number;
    number_of_players_checkedin: number;
    number_of_players_joined: number;
    number_of_players_participants: number;
    organizer_id: string;
    prize_type: string;
    region: string;
    started_at: number;
    status: string;
    subscriptions_count: number;
    team_size: number;
    total_prize: Nullable<number>;
    tournament_id: string;
    whitelist_countries: string[];
  }>;
};

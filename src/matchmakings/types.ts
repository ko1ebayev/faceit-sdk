export interface MatchmakingQueue {
  id: string;
  name: string;
  open: boolean;
  organizer_id: string;
  paused: boolean;
}

export interface Matchmaking {
  id: string;
  game: string;
  region: string;
  name: string;
  icon: string;
  league_id: string;
  short_description: string;
  long_description: string;
  queues: MatchmakingQueue[];
}

export interface MatchmakingSlim {
  id: string;
  game: string;
  region: string;
  name: string;
  has_league: boolean;
}

export interface MatchmakingList {
  items: MatchmakingSlim[];
  start: number;
  end: number;
}
export interface GlobalRanking {
  player_id: string;
  nickname: string;
  country: string;
  position: number;
  faceit_elo: number;
  game_skill_level: number;
}

export interface GlobalRankingList {
  items: GlobalRanking[];
  start: number;
  end: number;
}

export interface PlayerGlobalRanking {
  position: number;
  items: GlobalRanking[];
  start: number;
  end: number;
}

export interface GetGlobalRankingParams {
  country?: string;
  offset?: number;
  limit?: number;
}

export interface GetPlayerRankingParams {
  country?: string;
  limit?: number;
}
import { Game, GamesList } from '../shared/types';
import { MatchmakingSlim } from '../matchmakings/types';

export { Game, GamesList };

// Queue related types
export interface Queue {
  queue_id: string;
  game_id: string;
  region: string;
  name: string;
  type: string;
  [key: string]: any;
}

export interface QueuesList {
  items: Queue[];
  start: number;
  end: number;
}

export interface QueueBan {
  player_id: string;
  nickname: string;
  reason: string;
  [key: string]: any;
}

export interface QueueBansList {
  items: QueueBan[];
  start: number;
  end: number;
}

// Re-export from matchmakings for games usage
export interface MatchmakingsList {
  items: MatchmakingSlim[];
  start: number;
  end: number;
}
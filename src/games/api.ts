import { HttpClient } from "../core/http-client.interface";
import { PaginationParams } from "../core/pagination-params";
import { Game, GamesList, Queue, QueuesList, QueueBansList, MatchmakingsList } from "./types";

export class GamesAPI {
  constructor(private readonly http: HttpClient) {}

  async getGames(pagination?: PaginationParams): Promise<GamesList> {
    const response = await this.http.get<GamesList>("/games", {
      params: pagination,
    });
    return response.data;
  }

  async getGameMatchmakings(
    game_id: string,
    region: string,
    pagination: PaginationParams
  ): Promise<MatchmakingsList> {
    const response = await this.http.get<MatchmakingsList>(`/games/${game_id}/matchmakings`, {
      params: {
        region,
        ...pagination,
      },
    });
    return response.data;
  }

  async getGameDetails(game_id: string): Promise<Game> {
    const response = await this.http.get<Game>(`/games/${game_id}`);
    return response.data;
  }

  async getParentGameDetails(game_id: string): Promise<Game> {
    const response = await this.http.get<Game>(`/games/${game_id}/parent`);
    return response.data;
  }

  async getGameQueuesByFilters(
    game_id: string,
    entity_type: string,
    entity_id: string,
    pagination?: PaginationParams
  ): Promise<QueuesList> {
    const response = await this.http.get<QueuesList>(`/games/${game_id}/queues`, {
      params: {
        entity_id,
        entity_type,
        ...pagination,
      },
    });
    return response.data;
  }

  async getGameQueueDetails(game_id: string, queue_id: string): Promise<Queue> {
    const response = await this.http.get<Queue>(`/games/${game_id}/queues/${queue_id}`);
    return response.data;
  }

  async getGameQueueBans(
    game_id: string,
    queue_id: string,
    pagination?: PaginationParams
  ): Promise<QueueBansList> {
    const response = await this.http.get<QueueBansList>(`/games/${game_id}/queues/${queue_id}/bans`, {
      params: pagination,
    });
    return response.data;
  }

  async getGameQueuesByRegion(
    game_id: string,
    region_id: string,
    pagination?: PaginationParams
  ): Promise<QueuesList> {
    const response = await this.http.get<QueuesList>(`/games/${game_id}/regions/${region_id}/queues`, {
      params: pagination,
    });
    return response.data;
  }
}
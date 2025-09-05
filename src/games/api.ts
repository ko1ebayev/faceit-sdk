import { HttpClient } from "../core/http-client.interface";
import { PaginationParams } from "../core/pagination-params";

export class GamesAPI {
  constructor(private readonly http: HttpClient) {}

  async getGames(pagination?: PaginationParams): Promise<any> {
    const response = await this.http.get("/games", {
      params: pagination,
    });
    return response.data;
  }

  async getGameMatchmakings(
    game_id: string,
    region: string,
    pagination: PaginationParams
  ): Promise<any> {
    const response = await this.http.get(`/games/${game_id}/matchmakings`, {
      params: {
        region,
        ...pagination,
      },
    });
    return response.data;
  }

  async getGameDetails(game_id: string): Promise<any> {
    const response = await this.http.get(`/games/${game_id}`);
    return response.data;
  }

  async getParentGameDetails(game_id: string): Promise<any> {
    const response = await this.http.get(`/games/${game_id}/parent`);
    return response.data;
  }

  async getGameQueuesByFilters(
    game_id: string,
    entity_type: string,
    entity_id: string,
    pagination?: PaginationParams
  ): Promise<any> {
    const response = await this.http.get(`/games/${game_id}/queues`, {
      params: {
        entity_id,
        entity_type,
        ...pagination,
      },
    });
    return response.data;
  }

  async getGameQueueDetails(game_id: string, queue_id: string): Promise<any> {
    const response = await this.http.get(`/games/${game_id}/queues/${queue_id}`);
    return response.data;
  }

  async getGameQueueBans(
    game_id: string,
    queue_id: string,
    pagination?: PaginationParams
  ): Promise<any> {
    const response = await this.http.get(`/games/${game_id}/queues/${queue_id}/bans`, {
      params: pagination,
    });
    return response.data;
  }

  async getGameQueuesByRegion(
    game_id: string,
    region_id: string,
    pagination?: PaginationParams
  ): Promise<any> {
    const response = await this.http.get(`/games/${game_id}/regions/${region_id}/queues`, {
      params: pagination,
    });
    return response.data;
  }
}
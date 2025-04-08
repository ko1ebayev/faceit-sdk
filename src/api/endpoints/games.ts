import { Axios } from "axios";
import { PaginationParams } from "../../types/common/pagination-params";
import { HttpProvider } from "../http-client";

export class GamesAPI extends HttpProvider {
  constructor(readonly http: Axios) {
    super(http);
  }

  async getGames(pagination?: PaginationParams): Promise<any> {
    return this.http.get("/games", {
      params: pagination,
    });
  }

  async getGameMatchmakings(
    game_id: string,
    region: string,
    pagination: PaginationParams
  ): Promise<any> {
    return this.http.get(`/games/${game_id}/matchmakings`, {
      params: {
        region,
        ...pagination,
      },
    });
  }

  async getGameDetails(game_id: string): Promise<any> {
    return this.http.get(`/games/${game_id}`);
  }

  async getParentGameDetails(game_id: string): Promise<any> {
    return this.http.get(`/games/${game_id}/parent`);
  }

  async getGameQueuesByFilters(
    game_id: string,
    entity_type: string,
    entity_id: string,
    pagination?: PaginationParams
  ): Promise<any> {
    return this.http.get(`/games/${game_id}/queues`, {
      params: {
        entity_id,
        entity_type,
        ...pagination,
      },
    });
  }

  async getGameQueueDetails(game_id: string, queue_id: string): Promise<any> {
    return this.http.get(`/games/${game_id}/queues/${queue_id}`);
  }

  async getGameQueueBans(
    game_id: string,
    queue_id: string,
    pagination?: PaginationParams
  ): Promise<any> {
    return this.http.get(`/games/${game_id}/queues/${queue_id}/bans`, {
      params: pagination,
    });
  }

  async getGameQueuesByRegion(
    game_id: string,
    region_id: string,
    pagination?: PaginationParams
  ): Promise<any> {
    return this.http.get(`/games/${game_id}/regions/${region_id}/queues`, {
      params: pagination,
    });
  }
}

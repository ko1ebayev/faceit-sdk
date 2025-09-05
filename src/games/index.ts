import { HttpClient } from "../core/http-client.interface";
import { PaginationParams } from "../core/pagination-params";
import { GamesAPI } from "./api";

export class GamesModule {
  private api: GamesAPI;

  constructor(httpClient: HttpClient) {
    this.api = new GamesAPI(httpClient);
  }

  async getGames(pagination?: PaginationParams): Promise<any> {
    return this.api.getGames(pagination);
  }

  async getGameMatchmakings(
    game_id: string,
    region: string,
    pagination: PaginationParams
  ): Promise<any> {
    return this.api.getGameMatchmakings(game_id, region, pagination);
  }

  async getGameDetails(game_id: string): Promise<any> {
    return this.api.getGameDetails(game_id);
  }

  async getParentGameDetails(game_id: string): Promise<any> {
    return this.api.getParentGameDetails(game_id);
  }

  async getGameQueuesByFilters(
    game_id: string,
    entity_type: string,
    entity_id: string,
    pagination?: PaginationParams
  ): Promise<any> {
    return this.api.getGameQueuesByFilters(
      game_id,
      entity_type,
      entity_id,
      pagination
    );
  }

  async getGameQueueDetails(game_id: string, queue_id: string): Promise<any> {
    return this.api.getGameQueueDetails(game_id, queue_id);
  }

  async getGameQueueBans(
    game_id: string,
    queue_id: string,
    pagination?: PaginationParams
  ): Promise<any> {
    return this.api.getGameQueueBans(game_id, queue_id, pagination);
  }

  async getGameQueuesByRegion(
    game_id: string,
    region_id: string,
    pagination?: PaginationParams
  ): Promise<any> {
    return this.api.getGameQueuesByRegion(game_id, region_id, pagination);
  }
}
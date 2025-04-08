import { Axios } from "axios";
import { GamesAPI } from "../api/endpoints/games";
import { PaginationParams } from "../types/common/pagination-params";

export class GamesModule {
  readonly #gamesAPI: GamesAPI;

  constructor(readonly http: Axios) {
    this.#gamesAPI = new GamesAPI(http);
  }

  async getGames(pagination?: PaginationParams): Promise<any> {
    return this.#gamesAPI.getGames(pagination);
  }

  async getGameMatchmakings(
    game_id: string,
    region: string,
    pagination: PaginationParams
  ): Promise<any> {
    return this.#gamesAPI.getGameMatchmakings(game_id, region, pagination);
  }

  async getGameDetails(game_id: string): Promise<any> {
    return this.#gamesAPI.getGameDetails(game_id);
  }

  async getParentGameDetails(game_id: string): Promise<any> {
    return this.#gamesAPI.getParentGameDetails(game_id);
  }

  async getGameQueuesByFilters(
    game_id: string,
    entity_type: string,
    entity_id: string,
    pagination?: PaginationParams
  ): Promise<any> {
    return this.#gamesAPI.getGameQueuesByFilters(
      game_id,
      entity_type,
      entity_id,
      pagination
    );
  }

  async getGameQueueDetails(game_id: string, queue_id: string): Promise<any> {
    return this.#gamesAPI.getGameQueueDetails(game_id, queue_id);
  }

  async getGameQueueBans(
    game_id: string,
    queue_id: string,
    pagination?: PaginationParams
  ): Promise<any> {
    return this.#gamesAPI.getGameQueueBans(game_id, queue_id, pagination);
  }

  async getGameQueuesByRegion(
    game_id: string,
    region_id: string,
    pagination?: PaginationParams
  ): Promise<any> {
    return this.#gamesAPI.getGameQueuesByRegion(game_id, region_id, pagination);
  }
}

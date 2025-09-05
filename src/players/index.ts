import { HttpClient } from "../core/http-client.interface";
import { PaginationParams } from "../core/pagination-params";
import { PlayersAPI } from "./api";
import { PlayerDetails } from "./types";

export class PlayersModule {
  private api: PlayersAPI;

  constructor(httpClient: HttpClient) {
    this.api = new PlayersAPI(httpClient);
  }

  async getPlayerDetails(player_id: string): Promise<PlayerDetails> {
    return this.api.getPlayerDetails(player_id);
  }

  async getAllBansOfPlayer(player_id: string, pagination?: PaginationParams) {
    return this.api.getAllBansOfPlayer(player_id, pagination);
  }

  async getPlayerStatistics(
    player_id: string,
    game_id: string,
    pagination?: PaginationParams
  ) {
    return this.api.getPlayerStatistics(player_id, game_id, pagination);
  }

  async getPlayerMatches(
    player_id: string,
    game: string,
    pagination?: PaginationParams
  ) {
    return this.api.getPlayerMatches(player_id, game, pagination);
  }

  async getPlayerHubs(player_id: string, pagination?: PaginationParams) {
    return this.api.getPlayerHubs(player_id, pagination);
  }

  async getPlayerTeams(player_id: string, pagination?: PaginationParams) {
    return this.api.getPlayerTeams(player_id, pagination);
  }

  async getPlayerTournaments(player_id: string, pagination?: PaginationParams) {
    return this.api.getPlayerTournaments(player_id, pagination);
  }
}

// Export types for external use
export * from './types';
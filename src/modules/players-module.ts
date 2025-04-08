import { Axios } from "axios";
import { PlayersAPI } from "../api/endpoints/players";
import { PaginationParams } from "../types/common/pagination-params";
import { PlayerDetails } from "../types/normalized/player-details.type";

export class PlayersModule {
  #playerDetailsAPI: PlayersAPI;

  constructor(readonly http: Axios) {
    this.#playerDetailsAPI = new PlayersAPI(http);
  }

  async getPlayerDetails(player_id: string): Promise<PlayerDetails> {
    return this.#playerDetailsAPI.getPlayerDetails(player_id);
  }

  async getAllBansOfPlayer(player_id: string, pagination?: PaginationParams) {
    return this.#playerDetailsAPI.getAllBansOfPlayer(player_id, pagination);
  }

  async getPlayerStatistics(
    player_id: string,
    game_id: string,
    pagination?: PaginationParams
  ) {
    return this.#playerDetailsAPI.getPlayerStatistics(
      player_id,
      game_id,
      pagination
    );
  }

  async getPlayerMatches(
    player_id: string,
    game: string,
    pagination?: PaginationParams
  ) {
    return this.#playerDetailsAPI.getPlayerMatches(player_id, game, pagination);
  }

  async getPlayerHubs(player_id: string, pagination?: PaginationParams) {
    return this.#playerDetailsAPI.getPlayerHubs(player_id, pagination);
  }

  async getPlayerTeams(player_id: string, pagination?: PaginationParams) {
    return this.#playerDetailsAPI.getPlayerTeams(player_id, pagination);
  }

  async getPlayerTournaments(player_id: string, pagination?: PaginationParams) {
    return this.#playerDetailsAPI.getPlayerTournaments(player_id, pagination);
  }
}

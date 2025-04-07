import { Axios } from "axios";
import { PaginationParams } from "../../types/common/pagination-params";
import { PlayerBansDto } from "../../types/dtos/player-bans.dto";
import { PlayerDetailsDTO } from "../../types/dtos/player-details.dto";
import { HttpProvider } from "../http-client";

export class PlayersAPI extends HttpProvider {
  constructor(readonly http: Axios) {
    super(http);
  }

  async getPlayerDetails(player_id: string): Promise<PlayerDetailsDTO> {
    return this.http
      .get<PlayerDetailsDTO>(`/players/${player_id}`)
      .then((response) => {
        return response.data;
      });
  }

  async getAllBansOfPlayer(
    player_id: string,
    pagination: PaginationParams
  ): Promise<PlayerBansDto> {
    return this.http
      .get<PlayerBansDto>(`/players/${player_id}/bans`, {
        params: pagination,
      })
      .then((response) => {
        return response.data;
      });
  }

  async getPlayerStatistics(player_id: string, game_id: string) {
    return this.http.get(`/players/${player_id}/games/${game_id}/stats`);
  }

  async getPlayerMatches(player_id: string) {
    return this.http.get(`/players/${player_id}/history`);
  }

  async getPlayerHubs(player_id: string) {
    return this.http.get(`/players/${player_id}/hubs`);
  }

  async getPlayerTeams(player_id: string) {
    return this.http.get(`/players/${player_id}/teams`);
  }

  async getPlayerTournaments(player_id: string) {
    return this.http.get(`/players/${player_id}/tournaments`);
  }
}

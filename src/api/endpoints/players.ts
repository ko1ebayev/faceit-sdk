import { Axios } from "axios";

import { PaginatedResponse } from "../../types/common/paginated-response";
import { PaginationParams } from "../../types/common/pagination-params";
import { PlayerBanDto } from "../../types/dtos/player-ban.dto";
import { PlayerDetailsDTO } from "../../types/dtos/player-details.dto";
import { PlayerHubDTO } from "../../types/dtos/player-hub.dto";
import { PlayerMatchDTO } from "../../types/dtos/player-match.dto";
import { PlayerTeamDTO } from "../../types/dtos/player-team.dto";
import { PlayerTournamentDTO } from "../../types/dtos/player-tournament.dto";
import { HttpProvider } from "../http-client";

export class PlayersAPI extends HttpProvider {
  constructor(readonly http: Axios) {
    super(http);
  }

  async getPlayerDetails(player_id: string): Promise<PlayerDetailsDTO> {
    return this.http
      .get<PlayerDetailsDTO>(`/players/${player_id}`)
      .then((response) => response.data);
  }

  async getAllBansOfPlayer(
    player_id: string,
    pagination?: PaginationParams
  ): Promise<PaginatedResponse<PlayerBanDto>> {
    return this.http
      .get<PaginatedResponse<PlayerBanDto>>(`/players/${player_id}/bans`, {
        params: pagination,
      })
      .then((response) => response.data);
  }

  async getPlayerStatistics<S>(
    player_id: string,
    game_id: string,
    pagination?: PaginationParams
  ) {
    return this.http.get<PaginatedResponse<S>>(
      `/players/${player_id}/games/${game_id}/stats`,
      {
        params: pagination,
      }
    );
  }

  async getPlayerMatches(
    player_id: string,
    game: string,
    pagination?: PaginationParams
  ): Promise<PaginatedResponse<PlayerMatchDTO>> {
    return this.http
      .get<PaginatedResponse<PlayerMatchDTO>>(`/players/${player_id}/history`, {
        params: {
          game,
          ...pagination,
        },
      })
      .then((response) => response.data);
  }

  async getPlayerHubs(
    player_id: string,
    pagination?: PaginationParams
  ): Promise<PaginatedResponse<PlayerHubDTO>> {
    return this.http
      .get<PaginatedResponse<PlayerHubDTO>>(`/players/${player_id}/hubs`, {
        params: pagination,
      })
      .then((response) => response.data);
  }

  async getPlayerTeams(
    player_id: string,
    pagination?: PaginationParams
  ): Promise<PaginatedResponse<PlayerTeamDTO>> {
    return this.http
      .get<PaginatedResponse<PlayerTeamDTO>>(`/players/${player_id}/teams`, {
        params: pagination,
      })
      .then((response) => response.data);
  }

  async getPlayerTournaments(
    player_id: string,
    pagination?: PaginationParams
  ): Promise<PaginatedResponse<PlayerTournamentDTO>> {
    return this.http
      .get<PaginatedResponse<PlayerTournamentDTO>>(
        `/players/${player_id}/tournaments`,
        {
          params: pagination,
        }
      )
      .then((response) => response.data);
  }
}

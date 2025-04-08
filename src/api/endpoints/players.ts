import { Axios } from "axios";
import { PaginationParams } from "../../types/common/pagination-params";
import { PlayerBansDto } from "../../types/dtos/player-bans.dto";
import { PlayerDetailsDTO } from "../../types/dtos/player-details.dto";
import { PlayerHubsDTO } from "../../types/dtos/player-hubs.dto";
import { PlayerMatchesDTO } from "../../types/dtos/player-matches.dto";
import { PlayerStatisticsDTO } from "../../types/dtos/player-statistics.dto";
import { PlayerTeamsDTO } from "../../types/dtos/player-teams.dto";
import { PlayerTournamentsDTO } from "../../types/dtos/player-tournaments.dto";
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
  ): Promise<PlayerBansDto> {
    return this.http
      .get<PlayerBansDto>(`/players/${player_id}/bans`, {
        params: pagination,
      })
      .then((response) => response.data);
  }

  async getPlayerStatistics<StatisticsItem>(
    player_id: string,
    game_id: string,
    pagination?: PaginationParams
  ) {
    return this.http.get<PlayerStatisticsDTO<StatisticsItem>>(
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
  ): Promise<PlayerMatchesDTO> {
    return this.http
      .get<PlayerMatchesDTO>(`/players/${player_id}/history`, {
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
  ): Promise<PlayerHubsDTO> {
    return this.http
      .get<PlayerHubsDTO>(`/players/${player_id}/hubs`, {
        params: pagination,
      })
      .then((response) => response.data);
  }

  async getPlayerTeams(
    player_id: string,
    pagination?: PaginationParams
  ): Promise<PlayerTeamsDTO> {
    return this.http
      .get<PlayerTeamsDTO>(`/players/${player_id}/teams`, {
        params: pagination,
      })
      .then((response) => response.data);
  }

  async getPlayerTournaments(
    player_id: string,
    pagination?: PaginationParams
  ): Promise<PlayerTournamentsDTO> {
    return this.http
      .get<PlayerTournamentsDTO>(`/players/${player_id}/tournaments`, {
        params: pagination,
      })
      .then((response) => response.data);
  }
}

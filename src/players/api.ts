import { HttpClient } from "../core/http-client.interface";
import { PaginatedResponse } from "../core/paginated-response";
import { PaginationParams } from "../core/pagination-params";
import { PlayerBanDto } from "./types";
import { PlayerDetailsDTO } from "./types";
import { PlayerHubDTO } from "./types";
import { PlayerMatchDTO } from "./types";
import { PlayerTeamDTO } from "./types";
import { PlayerTournamentDTO } from "./types";

export class PlayersAPI {
  constructor(private readonly http: HttpClient) {}

  async getPlayerDetails(player_id: string): Promise<PlayerDetailsDTO> {
    const response = await this.http.get<PlayerDetailsDTO>(`/players/${player_id}`);
    return response.data;
  }

  async getAllBansOfPlayer(
    player_id: string,
    pagination?: PaginationParams
  ): Promise<PaginatedResponse<PlayerBanDto>> {
    const response = await this.http.get<PaginatedResponse<PlayerBanDto>>(
      `/players/${player_id}/bans`,
      { params: pagination }
    );
    return response.data;
  }

  async getPlayerStatistics<S>(
    player_id: string,
    game_id: string,
    pagination?: PaginationParams
  ): Promise<PaginatedResponse<S>> {
    const response = await this.http.get<PaginatedResponse<S>>(
      `/players/${player_id}/games/${game_id}/stats`,
      { params: pagination }
    );
    return response.data;
  }

  async getPlayerMatches(
    player_id: string,
    game: string,
    pagination?: PaginationParams
  ): Promise<PaginatedResponse<PlayerMatchDTO>> {
    const response = await this.http.get<PaginatedResponse<PlayerMatchDTO>>(
      `/players/${player_id}/history`,
      {
        params: {
          game,
          ...pagination,
        },
      }
    );
    return response.data;
  }

  async getPlayerHubs(
    player_id: string,
    pagination?: PaginationParams
  ): Promise<PaginatedResponse<PlayerHubDTO>> {
    const response = await this.http.get<PaginatedResponse<PlayerHubDTO>>(
      `/players/${player_id}/hubs`,
      { params: pagination }
    );
    return response.data;
  }

  async getPlayerTeams(
    player_id: string,
    pagination?: PaginationParams
  ): Promise<PaginatedResponse<PlayerTeamDTO>> {
    const response = await this.http.get<PaginatedResponse<PlayerTeamDTO>>(
      `/players/${player_id}/teams`,
      { params: pagination }
    );
    return response.data;
  }

  async getPlayerTournaments(
    player_id: string,
    pagination?: PaginationParams
  ): Promise<PaginatedResponse<PlayerTournamentDTO>> {
    const response = await this.http.get<PaginatedResponse<PlayerTournamentDTO>>(
      `/players/${player_id}/tournaments`,
      { params: pagination }
    );
    return response.data;
  }
}
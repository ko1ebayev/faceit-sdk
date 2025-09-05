import { HttpClient } from '../core/http-client.interface';
import {
  Team,
  TeamStats,
  TournamentsList,
  GetTeamTournamentsParams,
} from './types';

export class TeamsApi {
  constructor(private httpClient: HttpClient) {}

  async getTeam(teamId: string): Promise<Team> {
    const response = await this.httpClient.get<Team>(
      `/teams/${teamId}`
    );
    return response.data;
  }

  async getTeamStats(teamId: string, gameId: string): Promise<TeamStats> {
    const response = await this.httpClient.get<TeamStats>(
      `/teams/${teamId}/stats/${gameId}`
    );
    return response.data;
  }

  async getTeamTournaments(
    teamId: string,
    params?: GetTeamTournamentsParams
  ): Promise<TournamentsList> {
    const response = await this.httpClient.get<TournamentsList>(
      `/teams/${teamId}/tournaments`,
      { params }
    );
    return response.data;
  }
}
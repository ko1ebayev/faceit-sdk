import { HttpClient } from '../core/http-client.interface';
import { TeamsApi } from './api';
import {
  Team,
  TeamStats,
  TournamentsList,
  GetTeamTournamentsParams,
} from './types';

export class TeamsModule {
  private api: TeamsApi;

  constructor(httpClient: HttpClient) {
    this.api = new TeamsApi(httpClient);
  }

  getTeam(teamId: string): Promise<Team> {
    return this.api.getTeam(teamId);
  }

  getTeamStats(teamId: string, gameId: string): Promise<TeamStats> {
    return this.api.getTeamStats(teamId, gameId);
  }

  getTeamTournaments(
    teamId: string,
    params?: GetTeamTournamentsParams
  ): Promise<TournamentsList> {
    return this.api.getTeamTournaments(teamId, params);
  }
}

export * from './types';
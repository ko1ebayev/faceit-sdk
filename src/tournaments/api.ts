import { HttpClient } from '../core/http-client.interface';
import {
  Tournament,
  TournamentTeams,
  Brackets,
  GetTournamentsParams,
  GetTournamentParams,
  GetTournamentMatchesParams,
  GetTournamentTeamsParams,
  TournamentsList,
} from './types';
import { MatchList } from '../shared/types';

export class TournamentsApi {
  constructor(private httpClient: HttpClient) {}

  async getTournaments(params?: GetTournamentsParams): Promise<TournamentsList> {
    const response = await this.httpClient.get<TournamentsList>(
      '/tournaments',
      { params }
    );
    return response.data;
  }

  async getTournament(
    tournamentId: string,
    params?: GetTournamentParams
  ): Promise<Tournament> {
    const response = await this.httpClient.get<Tournament>(
      `/tournaments/${tournamentId}`,
      { params }
    );
    return response.data;
  }

  async getTournamentBrackets(tournamentId: string): Promise<Brackets> {
    const response = await this.httpClient.get<Brackets>(
      `/tournaments/${tournamentId}/brackets`
    );
    return response.data;
  }

  async getTournamentMatches(
    tournamentId: string,
    params?: GetTournamentMatchesParams
  ): Promise<MatchList> {
    const response = await this.httpClient.get<MatchList>(
      `/tournaments/${tournamentId}/matches`,
      { params }
    );
    return response.data;
  }

  async getTournamentTeams(
    tournamentId: string,
    params?: GetTournamentTeamsParams
  ): Promise<TournamentTeams> {
    const response = await this.httpClient.get<TournamentTeams>(
      `/tournaments/${tournamentId}/teams`,
      { params }
    );
    return response.data;
  }
}
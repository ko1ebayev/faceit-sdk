import { HttpClient } from '../core/http-client.interface';
import { TournamentsApi } from './api';
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

export class TournamentsModule {
  private api: TournamentsApi;

  constructor(httpClient: HttpClient) {
    this.api = new TournamentsApi(httpClient);
  }

  getTournaments(params?: GetTournamentsParams): Promise<TournamentsList> {
    return this.api.getTournaments(params);
  }

  getTournament(
    tournamentId: string,
    params?: GetTournamentParams
  ): Promise<Tournament> {
    return this.api.getTournament(tournamentId, params);
  }

  getTournamentBrackets(tournamentId: string): Promise<Brackets> {
    return this.api.getTournamentBrackets(tournamentId);
  }

  getTournamentMatches(
    tournamentId: string,
    params?: GetTournamentMatchesParams
  ): Promise<MatchList> {
    return this.api.getTournamentMatches(tournamentId, params);
  }

  getTournamentTeams(
    tournamentId: string,
    params?: GetTournamentTeamsParams
  ): Promise<TournamentTeams> {
    return this.api.getTournamentTeams(tournamentId, params);
  }
}

export * from './types';
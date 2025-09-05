import { HttpClient } from '../core/http-client.interface';
import { OrganizersApi } from './api';
import {
  Organizer,
  GamesList,
  TournamentsList,
  GetOrganizerGamesParams,
  GetOrganizerTournamentsParams,
  GetOrganizerHubsParams,
  HubsList,
  GetOrganizerChampionshipsParams,
  ChampionshipsList,
} from './types';

export class OrganizersModule {
  private api: OrganizersApi;

  constructor(httpClient: HttpClient) {
    this.api = new OrganizersApi(httpClient);
  }

  getOrganizer(organizerId: string): Promise<Organizer> {
    return this.api.getOrganizer(organizerId);
  }

  getOrganizerGames(
    organizerId: string,
    params?: GetOrganizerGamesParams
  ): Promise<GamesList> {
    return this.api.getOrganizerGames(organizerId, params);
  }

  getOrganizerTournaments(
    organizerId: string,
    params?: GetOrganizerTournamentsParams
  ): Promise<TournamentsList> {
    return this.api.getOrganizerTournaments(organizerId, params);
  }

  getOrganizerHubs(
    organizerId: string,
    params?: GetOrganizerHubsParams
  ): Promise<HubsList> {
    return this.api.getOrganizerHubs(organizerId, params);
  }

  getOrganizerChampionships(
    organizerId: string,
    params?: GetOrganizerChampionshipsParams
  ): Promise<ChampionshipsList> {
    return this.api.getOrganizerChampionships(organizerId, params);
  }
}

export * from './types';
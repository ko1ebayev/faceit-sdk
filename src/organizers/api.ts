import { HttpClient } from '../core/http-client.interface';
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

export class OrganizersApi {
  constructor(private httpClient: HttpClient) {}

  async getOrganizer(organizerId: string): Promise<Organizer> {
    const response = await this.httpClient.get<Organizer>(
      `/organizers/${organizerId}`
    );
    return response.data;
  }

  async getOrganizerGames(
    organizerId: string,
    params?: GetOrganizerGamesParams
  ): Promise<GamesList> {
    const response = await this.httpClient.get<GamesList>(
      `/organizers/${organizerId}/games`,
      { params }
    );
    return response.data;
  }

  async getOrganizerTournaments(
    organizerId: string,
    params?: GetOrganizerTournamentsParams
  ): Promise<TournamentsList> {
    const response = await this.httpClient.get<TournamentsList>(
      `/organizers/${organizerId}/tournaments`,
      { params }
    );
    return response.data;
  }

  async getOrganizerHubs(
    organizerId: string,
    params?: GetOrganizerHubsParams
  ): Promise<HubsList> {
    const response = await this.httpClient.get<HubsList>(
      `/organizers/${organizerId}/hubs`,
      { params }
    );
    return response.data;
  }

  async getOrganizerChampionships(
    organizerId: string,
    params?: GetOrganizerChampionshipsParams
  ): Promise<ChampionshipsList> {
    const response = await this.httpClient.get<ChampionshipsList>(
      `/organizers/${organizerId}/championships`,
      { params }
    );
    return response.data;
  }
}
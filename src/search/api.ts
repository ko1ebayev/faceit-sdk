import { HttpClient } from '../core/http-client.interface';
import {
  CompetitionsSearchList,
  ClansSearchList,
  OrganizersSearchList,
  UsersSearchList,
  TeamsSearchList,
  SearchChampionshipsParams,
  SearchClansParams,
  SearchHubsParams,
  SearchOrganizersParams,
  SearchPlayersParams,
  SearchTeamsParams,
  SearchTournamentsParams,
} from './types';

export class SearchApi {
  constructor(private httpClient: HttpClient) {}

  async searchChampionships(params: SearchChampionshipsParams): Promise<CompetitionsSearchList> {
    const response = await this.httpClient.get<CompetitionsSearchList>(
      '/search/championships',
      { params }
    );
    return response.data;
  }

  async searchClans(params: SearchClansParams): Promise<ClansSearchList> {
    const response = await this.httpClient.get<ClansSearchList>(
      '/search/clans',
      { params }
    );
    return response.data;
  }

  async searchHubs(params: SearchHubsParams): Promise<CompetitionsSearchList> {
    const response = await this.httpClient.get<CompetitionsSearchList>(
      '/search/hubs',
      { params }
    );
    return response.data;
  }

  async searchOrganizers(params: SearchOrganizersParams): Promise<OrganizersSearchList> {
    const response = await this.httpClient.get<OrganizersSearchList>(
      '/search/organizers',
      { params }
    );
    return response.data;
  }

  async searchPlayers(params: SearchPlayersParams): Promise<UsersSearchList> {
    const response = await this.httpClient.get<UsersSearchList>(
      '/search/players',
      { params }
    );
    return response.data;
  }

  async searchTeams(params: SearchTeamsParams): Promise<TeamsSearchList> {
    const response = await this.httpClient.get<TeamsSearchList>(
      '/search/teams',
      { params }
    );
    return response.data;
  }

  async searchTournaments(params: SearchTournamentsParams): Promise<CompetitionsSearchList> {
    const response = await this.httpClient.get<CompetitionsSearchList>(
      '/search/tournaments',
      { params }
    );
    return response.data;
  }
}
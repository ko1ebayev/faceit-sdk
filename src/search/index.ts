import { HttpClient } from '../core/http-client.interface';
import { SearchApi } from './api';
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

export class SearchModule {
  private api: SearchApi;

  constructor(httpClient: HttpClient) {
    this.api = new SearchApi(httpClient);
  }

  searchChampionships(params: SearchChampionshipsParams): Promise<CompetitionsSearchList> {
    return this.api.searchChampionships(params);
  }

  searchClans(params: SearchClansParams): Promise<ClansSearchList> {
    return this.api.searchClans(params);
  }

  searchHubs(params: SearchHubsParams): Promise<CompetitionsSearchList> {
    return this.api.searchHubs(params);
  }

  searchOrganizers(params: SearchOrganizersParams): Promise<OrganizersSearchList> {
    return this.api.searchOrganizers(params);
  }

  searchPlayers(params: SearchPlayersParams): Promise<UsersSearchList> {
    return this.api.searchPlayers(params);
  }

  searchTeams(params: SearchTeamsParams): Promise<TeamsSearchList> {
    return this.api.searchTeams(params);
  }

  searchTournaments(params: SearchTournamentsParams): Promise<CompetitionsSearchList> {
    return this.api.searchTournaments(params);
  }
}

export * from './types';
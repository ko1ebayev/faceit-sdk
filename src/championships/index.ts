import { HttpClient } from "../core/http-client.interface";
import { ChampionshipsAPI } from "./api";
import { MatchList } from "../hubs/types";
import {
  Championship,
  ChampionshipsList,
  ChampionshipResultList,
  ChampionshipSubscriptionsList,
  GetChampionshipsParams,
  GetChampionshipParams,
  GetChampionshipMatchesParams,
  GetChampionshipResultsParams,
  GetChampionshipSubscriptionsParams
} from "./types";

export class ChampionshipsModule {
  private api: ChampionshipsAPI;

  constructor(httpClient: HttpClient) {
    this.api = new ChampionshipsAPI(httpClient);
  }

  /**
   * Retrieve all championships of a game
   * @param params - Parameters including required game id
   */
  async getChampionships(params: GetChampionshipsParams): Promise<ChampionshipsList> {
    return this.api.getChampionships(params);
  }

  /**
   * Retrieve championship details
   * @param championship_id - The id of the championship
   * @param params - Optional parameters for expanded entities
   */
  async getChampionship(
    championship_id: string,
    params?: GetChampionshipParams
  ): Promise<Championship> {
    return this.api.getChampionship(championship_id, params);
  }

  /**
   * Retrieve all matches of a championship
   * @param championship_id - The id of the championship
   * @param params - Optional parameters for filtering and pagination
   */
  async getChampionshipMatches(
    championship_id: string,
    params?: GetChampionshipMatchesParams
  ): Promise<MatchList> {
    return this.api.getChampionshipMatches(championship_id, params);
  }

  /**
   * Retrieve all results of a championship
   * @param championship_id - The id of the championship
   * @param params - Optional parameters for pagination
   */
  async getChampionshipResults(
    championship_id: string,
    params?: GetChampionshipResultsParams
  ): Promise<ChampionshipResultList> {
    return this.api.getChampionshipResults(championship_id, params);
  }

  /**
   * Retrieve all subscriptions of a championship
   * @param championship_id - The id of the championship
   * @param params - Optional parameters for pagination
   */
  async getChampionshipSubscriptions(
    championship_id: string,
    params?: GetChampionshipSubscriptionsParams
  ): Promise<ChampionshipSubscriptionsList> {
    return this.api.getChampionshipSubscriptions(championship_id, params);
  }
}

// Export types for external use
export * from './types';
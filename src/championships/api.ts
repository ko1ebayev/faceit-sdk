import { HttpClient } from "../core/http-client.interface";
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

export class ChampionshipsAPI {
  constructor(private readonly http: HttpClient) {}

  /**
   * Retrieve all championships of a game
   * @param params - Parameters including required game id
   */
  async getChampionships(params: GetChampionshipsParams): Promise<ChampionshipsList> {
    const response = await this.http.get<ChampionshipsList>('/championships', {
      params
    });
    return response.data;
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
    const response = await this.http.get<Championship>(
      `/championships/${championship_id}`,
      {
        params: params?.expanded ? { expanded: params.expanded.join(',') } : undefined
      }
    );
    return response.data;
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
    const response = await this.http.get<MatchList>(
      `/championships/${championship_id}/matches`,
      { params }
    );
    return response.data;
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
    const response = await this.http.get<ChampionshipResultList>(
      `/championships/${championship_id}/results`,
      { params }
    );
    return response.data;
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
    const response = await this.http.get<ChampionshipSubscriptionsList>(
      `/championships/${championship_id}/subscriptions`,
      { params }
    );
    return response.data;
  }
}
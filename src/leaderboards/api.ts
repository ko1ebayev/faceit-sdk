import { HttpClient } from "../core/http-client.interface";
import {
  LeaderboardsList,
  EntityRanking,
  Ranking,
  GetChampionshipLeaderboardsParams,
  GetChampionshipGroupRankingParams,
  GetHubLeaderboardsParams,
  GetHubRankingParams,
  GetHubSeasonRankingParams,
  GetLeaderboardParams
} from "./types";

export class LeaderboardsAPI {
  constructor(private readonly http: HttpClient) {}

  /**
   * Retrieve all leaderboards of a championship
   * @param championship_id - The id of the championship
   * @param params - Optional parameters for pagination
   */
  async getChampionshipLeaderboards(
    championship_id: string,
    params?: GetChampionshipLeaderboardsParams
  ): Promise<LeaderboardsList> {
    const response = await this.http.get<LeaderboardsList>(
      `/leaderboards/championships/${championship_id}`,
      { params }
    );
    return response.data;
  }

  /**
   * Retrieve group ranking of a championship
   * @param championship_id - The id of the championship
   * @param group - A group of the championship
   * @param params - Optional parameters for pagination
   */
  async getChampionshipGroupRanking(
    championship_id: string,
    group: number,
    params?: GetChampionshipGroupRankingParams
  ): Promise<EntityRanking> {
    const response = await this.http.get<EntityRanking>(
      `/leaderboards/championships/${championship_id}/groups/${group}`,
      { params }
    );
    return response.data;
  }

  /**
   * Retrieve all leaderboards of a hub
   * @param hub_id - The id of the hub
   * @param params - Optional parameters for pagination
   */
  async getHubLeaderboards(
    hub_id: string,
    params?: GetHubLeaderboardsParams
  ): Promise<LeaderboardsList> {
    const response = await this.http.get<LeaderboardsList>(
      `/leaderboards/hubs/${hub_id}`,
      { params }
    );
    return response.data;
  }

  /**
   * Retrieve all time ranking of a hub
   * @param hub_id - The id of the hub
   * @param params - Optional parameters for pagination
   */
  async getHubRanking(
    hub_id: string,
    params?: GetHubRankingParams
  ): Promise<EntityRanking> {
    const response = await this.http.get<EntityRanking>(
      `/leaderboards/hubs/${hub_id}/general`,
      { params }
    );
    return response.data;
  }

  /**
   * Retrieve seasonal ranking of a hub
   * @param hub_id - The id of the hub
   * @param season - A season of the hub
   * @param params - Optional parameters for pagination
   */
  async getHubSeasonRanking(
    hub_id: string,
    season: number,
    params?: GetHubSeasonRankingParams
  ): Promise<EntityRanking> {
    const response = await this.http.get<EntityRanking>(
      `/leaderboards/hubs/${hub_id}/seasons/${season}`,
      { params }
    );
    return response.data;
  }

  /**
   * Retrieve ranking from a leaderboard id
   * @param leaderboard_id - The id of the leaderboard
   * @param params - Optional parameters for pagination
   */
  async getLeaderboard(
    leaderboard_id: string,
    params?: GetLeaderboardParams
  ): Promise<EntityRanking> {
    const response = await this.http.get<EntityRanking>(
      `/leaderboards/${leaderboard_id}`,
      { params }
    );
    return response.data;
  }

  /**
   * Retrieve a players ranking in a leaderboard
   * @param leaderboard_id - The id of the leaderboard
   * @param player_id - The id of the player
   */
  async getPlayerRankingInLeaderboard(
    leaderboard_id: string,
    player_id: string
  ): Promise<Ranking> {
    const response = await this.http.get<Ranking>(
      `/leaderboards/${leaderboard_id}/players/${player_id}`
    );
    return response.data;
  }
}
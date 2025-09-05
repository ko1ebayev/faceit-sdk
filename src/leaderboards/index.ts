import { HttpClient } from "../core/http-client.interface";
import { LeaderboardsAPI } from "./api";
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

export class LeaderboardsModule {
  private api: LeaderboardsAPI;

  constructor(httpClient: HttpClient) {
    this.api = new LeaderboardsAPI(httpClient);
  }

  /**
   * Retrieve all leaderboards of a championship
   * @param championship_id - The id of the championship
   * @param params - Optional parameters for pagination
   */
  async getChampionshipLeaderboards(
    championship_id: string,
    params?: GetChampionshipLeaderboardsParams
  ): Promise<LeaderboardsList> {
    return this.api.getChampionshipLeaderboards(championship_id, params);
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
    return this.api.getChampionshipGroupRanking(championship_id, group, params);
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
    return this.api.getHubLeaderboards(hub_id, params);
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
    return this.api.getHubRanking(hub_id, params);
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
    return this.api.getHubSeasonRanking(hub_id, season, params);
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
    return this.api.getLeaderboard(leaderboard_id, params);
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
    return this.api.getPlayerRankingInLeaderboard(leaderboard_id, player_id);
  }
}

// Export types for external use
export * from './types';
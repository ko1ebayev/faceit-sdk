import { HttpClient } from "../core/http-client.interface";
import { HubsAPI } from "./api";
import {
  Hub,
  HubMembers,
  RolesList,
  Rules,
  HubStats,
  MatchList,
  GetHubParams,
  GetHubMatchesParams,
  GetHubMembersParams,
  GetHubRolesParams,
  GetHubStatsParams
} from "./types";

export class HubsModule {
  private api: HubsAPI;

  constructor(httpClient: HttpClient) {
    this.api = new HubsAPI(httpClient);
  }

  /**
   * Retrieve hub details
   * @param hub_id - The id of the hub
   * @param params - Optional parameters for expanded entities
   */
  async getHub(hub_id: string, params?: GetHubParams): Promise<Hub> {
    return this.api.getHub(hub_id, params);
  }

  /**
   * Retrieve all matches of a hub
   * @param hub_id - The id of the hub
   * @param params - Optional parameters for filtering and pagination
   */
  async getHubMatches(hub_id: string, params?: GetHubMatchesParams): Promise<MatchList> {
    return this.api.getHubMatches(hub_id, params);
  }

  /**
   * Retrieve all members of a hub
   * @param hub_id - The id of the hub
   * @param params - Optional parameters for pagination
   */
  async getHubMembers(hub_id: string, params?: GetHubMembersParams): Promise<HubMembers> {
    return this.api.getHubMembers(hub_id, params);
  }

  /**
   * Retrieve all roles members can have in a hub
   * @param hub_id - The id of the hub
   * @param params - Optional parameters for pagination
   */
  async getHubRoles(hub_id: string, params?: GetHubRolesParams): Promise<RolesList> {
    return this.api.getHubRoles(hub_id, params);
  }

  /**
   * Retrieve rules of a hub
   * @param hub_id - The id of the hub
   */
  async getHubRules(hub_id: string): Promise<Rules> {
    return this.api.getHubRules(hub_id);
  }

  /**
   * Retrieve statistics of a hub
   * @param hub_id - The id of the hub
   * @param params - Optional parameters for pagination
   */
  async getHubStats(hub_id: string, params?: GetHubStatsParams): Promise<HubStats> {
    return this.api.getHubStats(hub_id, params);
  }
}

// Export types for external use
export * from './types';
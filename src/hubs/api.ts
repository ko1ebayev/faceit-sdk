import { HttpClient } from "../core/http-client.interface";
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

export class HubsAPI {
  constructor(private readonly http: HttpClient) {}

  /**
   * Retrieve hub details
   * @param hub_id - The id of the hub
   * @param params - Optional parameters for expanded entities
   */
  async getHub(hub_id: string, params?: GetHubParams): Promise<Hub> {
    const response = await this.http.get<Hub>(`/hubs/${hub_id}`, {
      params: params?.expanded ? { expanded: params.expanded.join(',') } : undefined
    });
    return response.data;
  }

  /**
   * Retrieve all matches of a hub
   * @param hub_id - The id of the hub
   * @param params - Optional parameters for filtering and pagination
   */
  async getHubMatches(hub_id: string, params?: GetHubMatchesParams): Promise<MatchList> {
    const response = await this.http.get<MatchList>(`/hubs/${hub_id}/matches`, {
      params
    });
    return response.data;
  }

  /**
   * Retrieve all members of a hub
   * @param hub_id - The id of the hub
   * @param params - Optional parameters for pagination
   */
  async getHubMembers(hub_id: string, params?: GetHubMembersParams): Promise<HubMembers> {
    const response = await this.http.get<HubMembers>(`/hubs/${hub_id}/members`, {
      params
    });
    return response.data;
  }

  /**
   * Retrieve all roles members can have in a hub
   * @param hub_id - The id of the hub
   * @param params - Optional parameters for pagination
   */
  async getHubRoles(hub_id: string, params?: GetHubRolesParams): Promise<RolesList> {
    const response = await this.http.get<RolesList>(`/hubs/${hub_id}/roles`, {
      params
    });
    return response.data;
  }

  /**
   * Retrieve rules of a hub
   * @param hub_id - The id of the hub
   */
  async getHubRules(hub_id: string): Promise<Rules> {
    const response = await this.http.get<Rules>(`/hubs/${hub_id}/rules`);
    return response.data;
  }

  /**
   * Retrieve statistics of a hub
   * @param hub_id - The id of the hub
   * @param params - Optional parameters for pagination
   */
  async getHubStats(hub_id: string, params?: GetHubStatsParams): Promise<HubStats> {
    const response = await this.http.get<HubStats>(`/hubs/${hub_id}/stats`, {
      params
    });
    return response.data;
  }
}
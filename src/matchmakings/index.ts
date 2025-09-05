import { HttpClient } from "../core/http-client.interface";
import { MatchmakingsAPI } from "./api";

export class MatchmakingsModule {
  private api: MatchmakingsAPI;

  constructor(httpClient: HttpClient) {
    this.api = new MatchmakingsAPI(httpClient);
  }

  async getMatchmakingDetails(matchmaking_id: string): Promise<any> {
    return this.api.getMatchmakingDetails(matchmaking_id);
  }
}
import { HttpClient } from "../core/http-client.interface";
import { MatchesAPI } from "./api";

export class MatchesModule {
  private api: MatchesAPI;

  constructor(httpClient: HttpClient) {
    this.api = new MatchesAPI(httpClient);
  }

  async getMatchDetails(match_id: string): Promise<any> {
    return this.api.getMatchDetails(match_id);
  }

  async getMatchStats(match_id: string): Promise<any> {
    return this.api.getMatchStats(match_id);
  }
}
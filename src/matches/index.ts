import { HttpClient } from "../core/http-client.interface";
import { MatchesAPI } from "./api";
import { MatchDetails, MatchStats } from "./types";

export * from "./types";

export class MatchesModule {
  private api: MatchesAPI;

  constructor(httpClient: HttpClient) {
    this.api = new MatchesAPI(httpClient);
  }

  async getMatchDetails(match_id: string): Promise<MatchDetails> {
    return this.api.getMatchDetails(match_id);
  }

  async getMatchStats(match_id: string): Promise<MatchStats> {
    return this.api.getMatchStats(match_id);
  }
}
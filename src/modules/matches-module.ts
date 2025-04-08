import { Axios } from "axios";
import { MatchesAPI } from "../api/endpoints/matches";

export class MatchesModule {
  #matchesAPI: MatchesAPI;

  constructor(readonly http: Axios) {
    this.#matchesAPI = new MatchesAPI(http);
  }

  async getMatchDetails(match_id: string): Promise<any> {
    return this.#matchesAPI.getMatchDetails(match_id);
  }

  async getMatchStats(match_id: string): Promise<any> {
    return this.#matchesAPI.getMatchStats(match_id);
  }
}

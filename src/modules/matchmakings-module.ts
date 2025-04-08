import { Axios } from "axios";
import { MatchmakingsAPI } from "../api/endpoints/matchmakings";

export class MatchmakingsModule {
  #matchmakingsAPI: MatchmakingsAPI;

  constructor(readonly http: Axios) {
    this.#matchmakingsAPI = new MatchmakingsAPI(http);
  }

  async getMatchmakingDetails(matchmaking_id: string): Promise<any> {
    return this.#matchmakingsAPI.getMatchmakingDetails(matchmaking_id);
  }
}

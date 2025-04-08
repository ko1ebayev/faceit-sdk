import { Axios } from "axios";
import { HttpProvider } from "../http-client";

export class MatchmakingsAPI extends HttpProvider {
  constructor(readonly http: Axios) {
    super(http);
  }

  async getMatchmakingDetails(matchmaking_id: string): Promise<any> {
    return this.http
      .get(`/matchmakings/${matchmaking_id}`)
      .then((response) => response.data);
  }
}

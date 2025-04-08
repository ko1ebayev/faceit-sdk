import { Axios } from "axios";
import { HttpProvider } from "../http-client";

export class MatchesAPI extends HttpProvider {
  constructor(readonly http: Axios) {
    super(http);
  }

  async getMatchDetails(match_id: string): Promise<any> {
    return this.http
      .get(`/matches/${match_id}`)
      .then((response) => response.data);
  }

  async getMatchStats(match_id: string): Promise<any> {
    return this.http
      .get(`/matches/${match_id}/stats`)
      .then((response) => response.data);
  }
}

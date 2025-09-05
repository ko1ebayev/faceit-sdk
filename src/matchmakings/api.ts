import { HttpClient } from "../core/http-client.interface";

export class MatchmakingsAPI {
  constructor(private readonly http: HttpClient) {}

  async getMatchmakingDetails(matchmaking_id: string): Promise<any> {
    const response = await this.http.get(`/matchmakings/${matchmaking_id}`);
    return response.data;
  }
}
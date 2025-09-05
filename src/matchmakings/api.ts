import { HttpClient } from "../core/http-client.interface";
import { Matchmaking } from "./types";

export class MatchmakingsAPI {
  constructor(private readonly http: HttpClient) {}

  async getMatchmakingDetails(matchmaking_id: string): Promise<Matchmaking> {
    const response = await this.http.get<Matchmaking>(`/matchmakings/${matchmaking_id}`);
    return response.data;
  }
}
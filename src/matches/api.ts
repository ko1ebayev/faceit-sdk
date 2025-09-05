import { HttpClient } from "../core/http-client.interface";
import { MatchDetails, MatchStats } from "./types";

export class MatchesAPI {
  constructor(private readonly http: HttpClient) {}

  async getMatchDetails(match_id: string): Promise<MatchDetails> {
    const response = await this.http.get<MatchDetails>(`/matches/${match_id}`);
    return response.data;
  }

  async getMatchStats(match_id: string): Promise<MatchStats> {
    const response = await this.http.get<MatchStats>(`/matches/${match_id}/stats`);
    return response.data;
  }
}
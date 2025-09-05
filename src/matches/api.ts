import { HttpClient } from "../core/http-client.interface";

export class MatchesAPI {
  constructor(private readonly http: HttpClient) {}

  async getMatchDetails(match_id: string): Promise<any> {
    const response = await this.http.get(`/matches/${match_id}`);
    return response.data;
  }

  async getMatchStats(match_id: string): Promise<any> {
    const response = await this.http.get(`/matches/${match_id}/stats`);
    return response.data;
  }
}
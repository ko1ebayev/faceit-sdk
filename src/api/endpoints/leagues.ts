import { Axios } from "axios";
import { HttpProvider } from "../http-client";

export class LeaguesAPI extends HttpProvider {
  constructor(readonly http: Axios) {
    super(http);
  }

  async getLeagueDetails(league_id: string): Promise<any> {
    return this.http
      .get(`/leagues/${league_id}`)
      .then((response) => response.data);
  }

  async getSeasonOfLeague(league_id: string, season_id: string): Promise<any> {
    return this.http
      .get(`/leagues/${league_id}/seasons/${season_id}`)
      .then((response) => response.data);
  }

  async getPlayerDetailsInSeasonOfLeagues(
    league_id: string,
    season_id: string,
    player_id: string
  ): Promise<any> {
    return this.http
      .get(`/leagues/${league_id}/seasons/${season_id}/players/${player_id}`)
      .then((response) => response.data);
  }
}

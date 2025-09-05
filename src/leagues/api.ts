import { HttpClient } from "../core/http-client.interface";
import {
  League,
  SeasonDetailed,
  PlayerInLeague
} from "./types";

export class LeaguesAPI {
  constructor(private readonly http: HttpClient) {}

  /**
   * Retrieve details of a league of a matchmaking on FACEIT
   * @param league_id - The id of the league
   */
  async getLeagueById(league_id: string): Promise<League> {
    const response = await this.http.get<League>(`/leagues/${league_id}`);
    return response.data;
  }

  /**
   * Retrieve details of a season of a league on FACEIT
   * @param league_id - The id of the league
   * @param season_id - The id of the season
   */
  async getLeagueSeason(
    league_id: string,
    season_id: number
  ): Promise<SeasonDetailed> {
    const response = await this.http.get<SeasonDetailed>(
      `/leagues/${league_id}/seasons/${season_id}`
    );
    return response.data;
  }

  /**
   * Retrieve details of a player for a given league and season on FACEIT
   * @param league_id - The id of the league
   * @param season_id - The id of the season
   * @param player_id - The id of the player
   */
  async getPlayerForLeagueSeason(
    league_id: string,
    season_id: number,
    player_id: string
  ): Promise<PlayerInLeague> {
    const response = await this.http.get<PlayerInLeague>(
      `/leagues/${league_id}/seasons/${season_id}/players/${player_id}`
    );
    return response.data;
  }
}
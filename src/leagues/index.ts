import { HttpClient } from "../core/http-client.interface";
import { LeaguesAPI } from "./api";
import {
  League,
  SeasonDetailed,
  PlayerInLeague
} from "./types";

export class LeaguesModule {
  private api: LeaguesAPI;

  constructor(httpClient: HttpClient) {
    this.api = new LeaguesAPI(httpClient);
  }

  /**
   * Retrieve details of a league of a matchmaking on FACEIT
   * @param league_id - The id of the league
   */
  async getLeagueById(league_id: string): Promise<League> {
    return this.api.getLeagueById(league_id);
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
    return this.api.getLeagueSeason(league_id, season_id);
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
    return this.api.getPlayerForLeagueSeason(league_id, season_id, player_id);
  }
}

// Export types for external use
export * from './types';
import { Axios } from "axios";
import { PaginationParams } from "../../types/common/pagination-params";
import { HttpProvider } from "../http-client";

export class RankingsAPI extends HttpProvider {
  constructor(readonly http: Axios) {
    super(http);
  }

  async getGameGlobalRanking(
    game_id: string,
    region: string,
    params?: {
      country?: string;
    } & PaginationParams
  ): Promise<any> {
    return this.http
      .get(`/rankings/games/${game_id}/regions/${region}`, { params })
      .then((response) => response.data);
  }

  async getUserPositionInGlobalRankingOfGame(
    game_id: string,
    region: string,
    player_id: string,
    params?: { country?: string } & PaginationParams
  ): Promise<any> {
    return this.http
      .get(
        `/rankings/games/${game_id}/regions/${region}/players/${player_id}`,
        { params }
      )
      .then((response) => response.data);
  }
}

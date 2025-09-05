import { HttpClient } from '../core/http-client.interface';
import {
  GlobalRankingList,
  PlayerGlobalRanking,
  GetGlobalRankingParams,
  GetPlayerRankingParams,
} from './types';

export class RankingsApi {
  constructor(private httpClient: HttpClient) {}

  async getGlobalRanking(
    gameId: string,
    region: string,
    params?: GetGlobalRankingParams
  ): Promise<GlobalRankingList> {
    const response = await this.httpClient.get<GlobalRankingList>(
      `/rankings/games/${gameId}/regions/${region}`,
      { params }
    );
    return response.data;
  }

  async getPlayerRanking(
    gameId: string,
    region: string,
    playerId: string,
    params?: GetPlayerRankingParams
  ): Promise<PlayerGlobalRanking> {
    const response = await this.httpClient.get<PlayerGlobalRanking>(
      `/rankings/games/${gameId}/regions/${region}/players/${playerId}`,
      { params }
    );
    return response.data;
  }
}
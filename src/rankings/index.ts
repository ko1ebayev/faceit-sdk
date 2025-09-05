import { HttpClient } from '../core/http-client.interface';
import { RankingsApi } from './api';
import {
  GlobalRankingList,
  PlayerGlobalRanking,
  GetGlobalRankingParams,
  GetPlayerRankingParams,
} from './types';

export class RankingsModule {
  private api: RankingsApi;

  constructor(httpClient: HttpClient) {
    this.api = new RankingsApi(httpClient);
  }

  getGlobalRanking(
    gameId: string,
    region: string,
    params?: GetGlobalRankingParams
  ): Promise<GlobalRankingList> {
    return this.api.getGlobalRanking(gameId, region, params);
  }

  getPlayerRanking(
    gameId: string,
    region: string,
    playerId: string,
    params?: GetPlayerRankingParams
  ): Promise<PlayerGlobalRanking> {
    return this.api.getPlayerRanking(gameId, region, playerId, params);
  }
}

export * from './types';
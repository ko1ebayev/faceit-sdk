import { Axios } from "axios";
import { PaginationParams } from "../../types/common/pagination-params";
import { HttpProvider } from "../http-client";

export class ChampionshipsAPI extends HttpProvider {
  constructor(readonly http: Axios) {
    super(http);
  }

  async getAllGameChampionships(
    game: string,
    type?: "all" | "upcoming" | "ongoing" | "past",
    pagination?: PaginationParams
  ): Promise<any> {
    return this.http
      .get("/championships", {
        params: {
          game,
          type,
          ...pagination,
        },
      })
      .then((response) => response.data);
  }

  async getChampionshipDetails(
    championship_id: string,
    expanded: ("organized" | "game")[] = []
  ): Promise<any> {
    return this.http
      .get(`/championships/${championship_id}`, {
        params: {
          expanded,
        },
      })
      .then((response) => response.data);
  }

  async getChampionshipMatches(
    championship_id: string,
    type?: "all" | "upcoming" | "ongoing" | "past",
    pagination?: PaginationParams
  ): Promise<any> {
    return this.http
      .get(`/championships/${championship_id}/matches`, {
        params: {
          type,
          ...pagination,
        },
      })
      .then((response) => response.data);
  }

  async getChampionshipResults(
    championship_id: string,
    pagination?: PaginationParams
  ): Promise<any> {
    return this.http
      .get(`/championships/${championship_id}/results`, {
        params: pagination,
      })
      .then((response) => response.data);
  }

  async getChampionshipSubscriptions(
    championship_id: string,
    pagination?: PaginationParams
  ): Promise<any> {
    return this.http
      .get(`/championships/${championship_id}/subscriptions`, {
        params: pagination,
      })
      .then((response) => response.data);
  }
}

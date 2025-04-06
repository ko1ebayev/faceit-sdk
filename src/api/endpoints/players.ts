
export class PlayersAPI extends HttpProvider {
  constructor(readonly http: HttpClient) {
    super(httpClient);
  }

  async getPlayerDetails(player_id: string) {
    return this.httpClient.get(`/players/${player_id}`);
  }

  async getAllBansOfPlayer(player_id: string) {
    return this.httpClient.get(`/players/${player_id}/bans`);
  }

  async getPlayerStatistics(player_id: string, game_id: string) {
    return this.httpClient.get(`/players/${player_id}/games/${game_id}/stats`);
  }

  async getPlayerMatches(player_id: string) {
    return this.httpClient.get(`/players/${player_id}/history`);
  }

  async getPlayerHubs(player_id: string) {
    return this.httpClient.get(`/players/${player_id}/hubs`);
  }

  async getPlayerTeams(player_id: string) {
    return this.httpClient.get(`/players/${player_id}/teams`);
  }

  async getPlayerTournaments(player_id: string) {
    return this.httpClient.get(`/players/${player_id}/tournaments`);
  }
}

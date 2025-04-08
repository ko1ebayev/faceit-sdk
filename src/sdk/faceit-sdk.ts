import { Axios } from "axios";
import { GamesModule } from "../modules/games-module";
import { MatchesModule } from "../modules/matches-module";
import { MatchmakingsModule } from "../modules/matchmakings-module";
import { PlayersModule } from "../modules/players-module";

export interface FaceitSDKConfig {
  readonly apiUrl: string;
  readonly apiKey: string;
}

export class FaceitSdk {
  readonly players: PlayersModule;
  readonly games: GamesModule;
  readonly matches: MatchesModule;
  readonly matchmaking: MatchmakingsModule;
  readonly championships;
  readonly hubs;
  readonly leaderboards;
  readonly leagues;
  readonly organizers;
  readonly rankings;
  readonly search;
  readonly teams;
  readonly tournaments;

  constructor(readonly config: FaceitSDKConfig) {
    const httpClient = new Axios({
      baseURL: config.apiUrl,
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
      },
    });

    this.players = new PlayersModule(httpClient);
    this.games = new GamesModule(httpClient);
    this.matches = new MatchesModule(httpClient);
    this.matchmaking = new MatchmakingsModule(httpClient);

    this.championships = new Axios();
    this.hubs = new Axios();
    this.leaderboards = new Axios();
    this.leagues = new Axios();
    this.organizers = new Axios();
    this.rankings = new Axios();
    this.search = new Axios();
    this.teams = new Axios();
    this.tournaments = new Axios();
  }
}

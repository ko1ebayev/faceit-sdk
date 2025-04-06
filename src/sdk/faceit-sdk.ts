import { Axios } from "axios";

interface FaceitSDKConfig {
  readonly apiUrl: string;
  readonly apiKey: string;
  readonly httpClientConfig: any;
}

export class FaceitSdk {
  readonly players;
  readonly games;
  readonly championships;
  readonly hubs;
  readonly leaderboards;
  readonly leagues;
  readonly matches;
  readonly matchmaking;
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

    this.players = new Axios();
    this.games = new Axios();
    this.championships = new Axios();
    this.hubs = new Axios();
    this.leaderboards = new Axios();
    this.leagues = new Axios();
    this.matches = new Axios();
    this.matchmaking = new Axios();
    this.organizers = new Axios();
    this.players = new Axios();
    this.rankings = new Axios();
    this.search = new Axios();
    this.teams = new Axios();
    this.tournaments = new Axios();
  }
}

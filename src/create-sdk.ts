import { HttpClient } from "./core/http-client.interface";
import { PlayersModule } from "./players";
import { MatchesModule } from "./matches";
import { GamesModule } from "./games";
import { MatchmakingsModule } from "./matchmakings";
import { HubsModule } from "./hubs";
import { ChampionshipsModule } from "./championships";
import { LeaderboardsModule } from "./leaderboards";
import { LeaguesModule } from "./leagues";
import { OrganizersModule } from "./organizers";
import { RankingsModule } from "./rankings";
import { SearchModule } from "./search";
import { TeamsModule } from "./teams";
import { TournamentsModule } from "./tournaments";

export interface FaceitSDK {
  players: PlayersModule;
  matches: MatchesModule;
  games: GamesModule;
  matchmakings: MatchmakingsModule;
  hubs: HubsModule;
  championships: ChampionshipsModule;
  leaderboards: LeaderboardsModule;
  leagues: LeaguesModule;
  organizers: OrganizersModule;
  rankings: RankingsModule;
  search: SearchModule;
  teams: TeamsModule;
  tournaments: TournamentsModule;
}

/**
 * Creates a complete Faceit SDK instance with all modules
 * @param httpClient - The HTTP client implementation
 * @returns FaceitSDK instance with all modules initialized
 */
export function createFaceitSDK(httpClient: HttpClient): FaceitSDK {
  return {
    players: new PlayersModule(httpClient),
    matches: new MatchesModule(httpClient),
    games: new GamesModule(httpClient),
    matchmakings: new MatchmakingsModule(httpClient),
    hubs: new HubsModule(httpClient),
    championships: new ChampionshipsModule(httpClient),
    leaderboards: new LeaderboardsModule(httpClient),
    leagues: new LeaguesModule(httpClient),
    organizers: new OrganizersModule(httpClient),
    rankings: new RankingsModule(httpClient),
    search: new SearchModule(httpClient),
    teams: new TeamsModule(httpClient),
    tournaments: new TournamentsModule(httpClient),
  };
}
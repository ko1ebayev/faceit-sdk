import { HttpClient } from "./core/http-client.interface";
import { PlayersModule } from "./players";
import { MatchesModule } from "./matches";
import { GamesModule } from "./games";
import { MatchmakingsModule } from "./matchmakings";
import { HubsModule } from "./hubs";

export interface FaceitSDK {
  players: PlayersModule;
  matches: MatchesModule;
  games: GamesModule;
  matchmakings: MatchmakingsModule;
  hubs: HubsModule;
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
  };
}
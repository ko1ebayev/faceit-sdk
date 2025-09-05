// Core exports
export { HttpClient, HttpRequestConfig, HttpResponse } from './core/http-client.interface';
export { Nullable } from './core/nullable';
export { PaginatedResponse } from './core/paginated-response';
export { PaginationParams } from './core/pagination-params';

// Helper exports
export { createFetchClient, FaceitConfig } from './helpers/create-http-client';

// Module exports - tree-shakeable
export { ChampionshipsModule } from './championships';
export { GamesModule } from './games';
export { HubsModule } from './hubs';
export { LeaderboardsModule } from './leaderboards';
export { LeaguesModule } from './leagues';
export { MatchesModule } from './matches';
export { MatchmakingsModule } from './matchmakings';
export { OrganizersModule } from './organizers';
export { PlayersModule } from './players';
export { RankingsModule } from './rankings';
export { SearchModule } from './search';
export { TeamsModule } from './teams';
export { TournamentsModule } from './tournaments';

// SDK factory for full usage
export { createFaceitSDK, FaceitSDK } from './create-sdk';

// Re-export all shared types
export * from './shared/types';

// Re-export module-specific types (avoiding conflicts with shared types)
export { 
  Championship,
  JoinCheck,
  Prize,
  ChampionshipSchedule,
  ChampionshipScreening,
  ChampionshipStream,
  SubstitutionConfiguration,
  ChampionshipBounds,
  ChampionshipPlacement,
  ChampionshipPlacementGroup,
  ChampionshipResultList,
  ChampionshipSubscription,
  ChampionshipSubscriptionsList,
  ChampionshipsListExtended,
  GetChampionshipsParams,
  GetChampionshipParams,
  GetChampionshipMatchesParams,
  GetChampionshipResultsParams,
  GetChampionshipSubscriptionsParams,
  // Extended types from championships
  Team as ChampionshipTeam,
  UserSimple as ChampionshipUserSimple
} from './championships/types';

export {
  Queue,
  QueuesList,
  QueueBan,
  QueueBansList,
  MatchmakingsList as GamesMatchmakingsList
} from './games/types';

export { 
  Hub,
  HubSmall,
  HubUser,
  HubMembers,
  Role,
  RolesList,
  Rules,
  StatsCompetitionPlayer,
  HubStats,
  HubMatchType,
  HubExpandedEntity,
  GetHubMatchesParams,
  GetHubMembersParams,
  GetHubRolesParams,
  GetHubStatsParams,
  GetHubParams,
  // Hub-specific types
  MatchResult as HubMatchResult,
  HubsList as HubsListExtended
} from './hubs/types';

export * from './leaderboards/types';
export * from './leagues/types';
export {
  MatchStats,
  PlayerStatsSimple,
  TeamStatsSimple,
  RoundStats
} from './matches/types';
export {
  Matchmaking,
  MatchmakingQueue,
  MatchmakingSlim,
  MatchmakingList
} from './matchmakings/types';
export {
  GetOrganizerGamesParams,
  GetOrganizerTournamentsParams,
  GetOrganizerHubsParams,
  GetOrganizerChampionshipsParams
} from './organizers/types';
export * from './players/types';
export * from './rankings/types';
export {
  CompetitionSearch,
  CompetitionsSearchList,
  ClanSearch,
  ClansSearchList,
  OrganizerSearch,
  OrganizersSearchList,
  GameUserSearch,
  UserSearch,
  UsersSearchList,
  TeamSearch,
  TeamsSearchList,
  SearchChampionshipsParams,
  SearchClansParams,
  SearchHubsParams,
  SearchOrganizersParams,
  SearchPlayersParams,
  SearchTeamsParams,
  SearchTournamentsParams
} from './search/types';
export {
  TeamStats,
  GetTeamTournamentsParams
} from './teams/types';
export {
  Tournament,
  TournamentTeam,
  TournamentTeams,
  BracketsFaction,
  BracketsMatch,
  BracketsRound,
  Brackets,
  GetTournamentsParams,
  GetTournamentParams,
  GetTournamentMatchesParams,
  GetTournamentTeamsParams
} from './tournaments/types';

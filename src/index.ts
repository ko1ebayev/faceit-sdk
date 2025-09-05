// Core exports
export { HttpClient, HttpRequestConfig, HttpResponse } from './core/http-client.interface';
export { PaginationParams } from './core/pagination-params';
export { PaginatedResponse } from './core/paginated-response';
export { Nullable } from './core/nullable';

// Module exports - tree-shakeable
export { PlayersModule } from './players';
export { MatchesModule } from './matches';
export { GamesModule } from './games';
export { MatchmakingsModule } from './matchmakings';
export { HubsModule } from './hubs';

// SDK factory for full usage
export { createFaceitSDK, FaceitSDK } from './create-sdk';

// Re-export types for convenience
export * from './players/types';
export * from './hubs/types';
# Faceit SDK (WIP)

A tree-shakeable TypeScript SDK for the Faceit Data API v4.

## Installation

```bash
npm install faceit-sdk
```

## Usage

The SDK is fully tree-shakeable. Import only the modules you need:

### Option 1: Import Individual Modules (Recommended for bundle size)

```typescript
import { PlayersModule } from 'faceit-sdk/players';
import { MatchesModule } from 'faceit-sdk/matches';

// Create your HTTP client
const httpClient = {
  async get(url, config) {
    const response = await fetch(`https://open.faceit.com/data/v4${url}`, {
      headers: {
        'Authorization': 'Bearer YOUR_API_KEY',
        ...config?.headers
      }
    });
    return {
      data: await response.json(),
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers)
    };
  },
  // Implement other methods (post, put, patch, delete) similarly
};

// Create only the modules you need
const players = new PlayersModule(httpClient);
const matches = new MatchesModule(httpClient);

// Use them
const playerDetails = await players.getPlayerDetails('player-id');
const matchDetails = await matches.getMatchDetails('match-id');
```

### Option 2: Use the Full SDK Factory

```typescript
import { createFaceitSDK } from 'faceit-sdk';

const sdk = createFaceitSDK(httpClient);

// Access all modules through the SDK
const playerDetails = await sdk.players.getPlayerDetails('player-id');
const matchDetails = await sdk.matches.getMatchDetails('match-id');
const games = await sdk.games.getGames();
```

## Available Modules

- `players` - Player information, statistics, matches, teams, etc.
- `matches` - Match details and statistics
- `games` - Game information and queues
- `matchmakings` - Matchmaking details
- `hubs` - Hub details, members, matches, roles, rules, and statistics
- `championships` - Championship details, matches, results, and subscriptions
- `leaderboards` - Leaderboard rankings for championships, hubs, and seasons

## HTTP Client Interface

Your HTTP client must implement this interface:

```typescript
interface HttpClient {
  get<T>(url: string, config?: HttpRequestConfig): Promise<HttpResponse<T>>;
  post<T>(url: string, data?: any, config?: HttpRequestConfig): Promise<HttpResponse<T>>;
  put<T>(url: string, data?: any, config?: HttpRequestConfig): Promise<HttpResponse<T>>;
  patch<T>(url: string, data?: any, config?: HttpRequestConfig): Promise<HttpResponse<T>>;
  delete<T>(url: string, config?: HttpRequestConfig): Promise<HttpResponse<T>>;
}
```

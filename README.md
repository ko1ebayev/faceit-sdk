# Faceit SDK

[![Release](https://github.com/ko1ebayev/faceit-sdk/actions/workflows/release.yml/badge.svg?branch=master)](https://github.com/ko1ebayev/faceit-sdk/actions/workflows/release.yml)

A tree-shakeable TypeScript SDK for the Faceit Data API v4.

## Installation

```bash
npm install faceit-sdk
```

## Quick Start

### Get Your API Key

First, you need to obtain an API key from [Faceit Developers](https://developers.faceit.com).

### Using the Built-in Fetch Client (Easiest)

```typescript
import { createFaceitSDK, createFetchClient } from 'faceit-sdk';

// Create HTTP client with your API key
const httpClient = createFetchClient({
  apiKey: 'YOUR_FACEIT_API_KEY', // Required!
  // baseUrl: 'https://open.faceit.com/data/v4' // Optional, this is the default
});

// Create the SDK
const sdk = createFaceitSDK(httpClient);

// Use it!
const playerDetails = await sdk.players.getPlayerDetails('player-id');
const matchDetails = await sdk.matches.getMatchDetails('match-id');
```

### Environment Variables (Recommended)

```typescript
import { createFaceitSDK, createFetchClient } from 'faceit-sdk';

const httpClient = createFetchClient({
  apiKey: process.env.FACEIT_API_KEY!, // Store your API key in .env file
});

const sdk = createFaceitSDK(httpClient);
```

## Usage Options

### Option 1: Tree-Shakeable Modules (Best for bundle size)

Import only the modules you need:

```typescript
import { PlayersModule, createFetchClient } from 'faceit-sdk';

const httpClient = createFetchClient({
  apiKey: process.env.FACEIT_API_KEY!,
});

// Create only the modules you need
const players = new PlayersModule(httpClient);

// Use it
const playerDetails = await players.getPlayerDetails('player-id');
```

### Option 2: Full SDK Factory

```typescript
import { createFaceitSDK, createFetchClient } from 'faceit-sdk';

const httpClient = createFetchClient({
  apiKey: process.env.FACEIT_API_KEY!,
});

const sdk = createFaceitSDK(httpClient);

// Access all modules through the SDK
const playerDetails = await sdk.players.getPlayerDetails('player-id');
const matchDetails = await sdk.matches.getMatchDetails('match-id');
const games = await sdk.games.getGames();
```

## Custom HTTP Client

If you prefer to use your own HTTP library (like Axios), you can provide a custom HTTP client:

### Using Axios

```typescript
import axios from 'axios';
import { createFaceitSDK, HttpClient } from 'faceit-sdk';

const httpClient: HttpClient = {
  async get(url, config) {
    const response = await axios.get(
      `https://open.faceit.com/data/v4${url}`,
      {
        headers: {
          'Authorization': `Bearer ${process.env.FACEIT_API_KEY}`,
          'Accept': 'application/json',
          ...config?.headers,
        },
        params: config?.params,
      }
    );
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    };
  },
  async post(url, data, config) {
    const response = await axios.post(
      `https://open.faceit.com/data/v4${url}`,
      data,
      {
        headers: {
          'Authorization': `Bearer ${process.env.FACEIT_API_KEY}`,
          'Accept': 'application/json',
          ...config?.headers,
        },
        params: config?.params,
      }
    );
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    };
  },
};

const sdk = createFaceitSDK(httpClient);
```

### Using Node Fetch

```typescript
import { createFaceitSDK, HttpClient } from 'faceit-sdk';

const httpClient: HttpClient = {
  async get(url, config) {
    const queryParams = config?.params 
      ? '?' + new URLSearchParams(config.params).toString() 
      : '';
    
    const response = await fetch(
      `https://open.faceit.com/data/v4${url}${queryParams}`,
      {
        headers: {
          'Authorization': `Bearer ${process.env.FACEIT_API_KEY}`,
          'Accept': 'application/json',
          ...config?.headers,
        },
      }
    );

    return {
      data: await response.json(),
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers.entries()),
    };
  },
  async post(url, data, config) {
    const queryParams = config?.params 
      ? '?' + new URLSearchParams(config.params).toString() 
      : '';
      
    const response = await fetch(
      `https://open.faceit.com/data/v4${url}${queryParams}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.FACEIT_API_KEY}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          ...config?.headers,
        },
        body: data ? JSON.stringify(data) : undefined,
      }
    );

    return {
      data: await response.json(),
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers.entries()),
    };
  },
};

const sdk = createFaceitSDK(httpClient);
```

## Available Modules

- `players` - Player information, statistics, matches, teams, etc.
- `matches` - Match details and statistics
- `games` - Game information and queues
- `matchmakings` - Matchmaking details
- `hubs` - Hub details, members, matches, roles, rules, and statistics
- `championships` - Championship details, matches, results, and subscriptions
- `leaderboards` - Leaderboard rankings for championships, hubs, and seasons
- `leagues` - League details, seasons, divisions, and player rankings

## Authentication

⚠️ **Important**: The Faceit API requires authentication via Bearer token. Make sure to:

1. Get your API key from [Faceit Developers Portal](https://developers.faceit.com)
2. Keep your API key secure and never commit it to version control
3. Use environment variables to store your API key

### Environment Setup

Create a `.env` file in your project root:

```bash
FACEIT_API_KEY=your_api_key_here
```

Then use it in your code:

```typescript
import { createFaceitSDK, createFetchClient } from 'faceit-sdk';

const httpClient = createFetchClient({
  apiKey: process.env.FACEIT_API_KEY!,
});

const sdk = createFaceitSDK(httpClient);
```

## HTTP Client Interface

If you're implementing a custom HTTP client, it must implement this interface:

```typescript
interface HttpClient {
  get<T>(url: string, config?: HttpRequestConfig): Promise<HttpResponse<T>>;
  post<T>(url: string, data?: any, config?: HttpRequestConfig): Promise<HttpResponse<T>>;
}

interface HttpRequestConfig {
  headers?: Record<string, string>;
  params?: Record<string, any>;
}

interface HttpResponse<T> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
}
```

**Note**: Your HTTP client MUST include the Authorization header with your Faceit API key:  
`Authorization: Bearer YOUR_API_KEY`

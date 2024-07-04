# Hive Bedrock API

An API wrapper for the Hive Minecraft Bedrock Edition server. Which allows you to get stats for leaderboards, players, cosmetics, unique player counts, maps and metadata.

## Getting started

```bash
$ npm install hive-bedrock-api
$ yarn add hive-bedrock-api
```

## Usage

See [API.md](docs/API.md) for detailed documentation.

### Fetch Player Infomation

```ts
import { getPlayerInformation } from "hive-bedrock-api";

// Returns player, cosmetics, server statistics and profile infomation
const { data, error } = await getPlayerInformation("player");
```

### Fetch All-Time Player Statistics

```ts
import { getAllTimeStatistics, Game } from "hive-bedrock-api";

// Returns all games
const { data, error } = await getAllTimeStats("player");

// Returns a single game
const { data, error } = await getAllTimeStats("player", Game.HideAndSeek);
```

### Fetch Season Player Statistics

```ts
import { getSeasonStatistics, Game } from "hive-bedrock-api";

// Returns a game statistics
const { data, error } = await getSeasonStatistics("player", Game.BedWars);
```

### Fetch Monthly Player Statistics

```ts
import { getMonthlyStatistics, Game } from "hive-bedrock-api";

// Returns all games
const { data, error } = await getMonthlyStats("player");

// Returns a single game
const { data, error } = await getMonthlyStats("player", Game.BlockDrop);

// Returns a single game in a previous month (can return muliple games)
const { data, error } = await getMonthlyStats("player", Game.BlockDrop, {
    year: 2023,
    month: 1, // January
});
```

### Fetch All-Time Leaderboard

```ts
import { getAllTimeLeaderboard, Game } from "hive-bedrock-api";

// Returns a single game
const { data, error } = await getAllTimeLeaderboard(Game.TreasureWars);
```

### Fetch Season Leaderboard

```ts
import { getSeasonLeaderboard, Game } from "hive-bedrock-api";

// Returns a single game
const { data, error } = await getSeasonLeaderboard(Game.BedWars);
```

### Fetch Monthly Leaderboard

```ts
import { getMonthlyLeaderboard, Game } from "hive-bedrock-api";

// Returns a single game
const { data, error } = await getMonthlyLeaderboard(Game.TreasureWars);

// Returns a single game from a previous month
const { data, error } = await getMonthlyLeaderboard(Game.BlockParty, {
    year: 2023,
    month: 11, // November
    amount: 50,
    skip: 20, // Sum of skip and amount must be <=100
});
```

### Fetch Global Statistics

```ts
import { getGlobalStatistics } from "hive-bedrock-api";

// Returns unqiue total player counts for different games
const { data, error } = await getGlobalStatistics();
```

### Fetch Maps

```ts
import { getMaps, Game } from "hive-bedrock-api";

// Returns data for a specific game's currently active maps
const { data, error } = await getMaps(Game.TreasureWars);
```

### Fetch Metadata

```ts
import { getMetadata, Game } from "hive-bedrock-api";

// Returns data for a specific game's currently active maps
const { data, error } = await getMetadata(Game.TreasureWars);
```

## API Response Changes

Different API responses are edited by the wrapper to provide more data:

-   Game responses have a new value "id" showing the parent game
-   A new value for "losses" is provided
-   A new value for "kdr" is provided
-   "xp" is converted and a "level" is provided
-   "total_ratings" for just build is provided

See [API.md](docs/API.md#game-statistics-types) for specific fields and their corresponding types per game.

# Hive Bedrock API

An API wrapper for the Hive Minecraft Bedrock Edition server. Which allows you to get stats for leaderboards, players, cosmetics and total unique player counts.

## Getting started

```bash
$ npm install hive-bedrock-api
$ yarn add hive-bedrock-api
```

## Usage

### Fetch All-Time Player Statistics

```ts
import { getAllTimeStats, GAME } from "hive-bedrock-api";

// Returns all games
const { data, player, error } = await getAllTimeStats("ucdfiddes");

// Returns multiple specific games
const { data, player, error } = await getAllTimeStats("ucdfiddes", [
    GAME.Deathrun,
    GAME.TheBridge,
]);

// Returns a single game
const { data, error } = await getAllTimeStats("ucdfiddes", GAME.HideAndSeek);
```

### Fetch Monthly Player Statistics

```ts
import { getMonthlyStats, GAME } from "hive-bedrock-api";

// Returns all games
const { data, error } = await getMonthlyStats("ucdfiddes");

// Returns multiple specific games
const { data, error } = await getMonthlyStats("ucdfiddes", [
    GAME.Deathrun,
    GAME.TheBridge,
]);

// Returns a single game
const { data, error } = await getMonthlyStats("ucdfiddes", GAME.BlockDrop);

// Returns a single game in a previous month (can return muliple games)
const { data, error } = await getMonthlyStats("ucdfiddes", GAME.BlockDrop, {
    year: 2023,
    month: 1, // January
});
```

### Fetch All-Time Leaderboard

```ts
import { getAllTimeLeaderboard, GAME } from "hive-bedrock-api";

// Returns asingle game
const { data, error } = await getAllTimeLeaderboard(GAME.TreasureWars);
```

### Fetch Monthly Leaderboard

```ts
import { getMonthlyLeaderboard, GAME } from "hive-bedrock-api";

// Returns asingle game
const { data, error } = await getMonthlyLeaderboard(GAME.TreasureWars);

// Returns a single game from a previous month
const { data, error } = await getMonthlyLeaderboard(GAME.BlockParty, {
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

## API Response Changes

Different API responses are edited by the wrapper to provide more data:

-   Game responses have a new value "id" showing the parent game
-   "first_played" values are converted into a Date object
-   A new value for "losses" is provided
-   A new value for "kdr" is provided
-   "xp" is converted and a "level" is provided

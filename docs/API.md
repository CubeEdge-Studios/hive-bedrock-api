# Documentation

## getMonthlyStats(playerIdentifier[, game, options])

Get a player's monthly statistics.

| Parameter             | Type                        | Required     | Description                                                                                                                                                                       |
| --------------------- | --------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| playerIdentifier      | `string`                    | **Required** | The player's gamertag or UUID of which to get stats for                                                                                                                           |
| game                  | `GAME \| GAME[]`            | _optional_   | The game identifier - see [GAME](API.md#games). When specifying multiple games in an array, will return array of results for each game. When not specified, will return all games |
| options               | `object`                    | _optional_   | Options is an object with the fields below:                                                                                                                                       |
| options.year          | `number`                    | _optional_   | The year from which to get stats                                                                                                                                                  |
| options.month         | `number`                    | _optional_   | The month from which to get stats                                                                                                                                                 |
| options.date          | `Date`                      | _optional_   | An instance of `Date` from which to get stats (can be used interchangably with `year` + `month`)                                                                                  |
| options.fetch         | `object`                    | _optional_   | Fetch options:                                                                                                                                                                    |
| options.fetch.headers | `{ [key: string]: string }` | _optional_   | Any custom headers to apply to the fetch method                                                                                                                                   |

Returns a Promise which resolves to the following object:

| Field | Type                                               | Description       |
| ----- | -------------------------------------------------- | ----------------- |
| data  | [Response](API.md#game-statistics-types) `\| null` | The response data |
| error | `{ message: string } \| null`                      | Error data        |

### Usage

```ts
import { getMonthlyStats, GAME } from "hive-bedrock-api";

// Get GAMERTAG's Treasure Wars stats from June 2023
const { data, error } = await getMonthlyStats("GAMERTAG", GAME.TreasureWars, {
  year: 2023,
  month: 6,
});
```

## getMonthlyLeaderboard(game[, options])

Get the monthly leaderboard for a specific month.

| Parameter             | Type                        | Required     | Description                                                                                                                                                              |
| --------------------- | --------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| game                  | `GAME \| GAME[]`            | **Required** | The game identifier - see [GAME](API.md#games). When specifying multiple games in an array, will return array of results for each game                                   |
| options               | `object`                    | _optional_   | Options is an object with the fields below:                                                                                                                              |
| options.year          | `number`                    | _optional_   | The year from which to get the leaderboard                                                                                                                               |
| options.month         | `number`                    | _optional_   | The month from which to get the leaderboard                                                                                                                              |
| options.date          | `Date`                      | _optional_   | An instance of `Date` from which to get the leaderboard (can be used interchangably with `year` + `month`; if both are present, `date` will override `year` and `month`) |
| options.skip          | `number`                    | _optional_   | How many players to skip in the leaderboard                                                                                                                              |
| options.amount        | `number`                    | _optional_   | How many players to return in the leaderboard                                                                                                                            |
| options.fetch         | `object`                    | _optional_   | Fetch options:                                                                                                                                                           |
| options.fetch.headers | `{ [key: string]: string }` | _optional_   | Any custom headers to apply to the fetch method                                                                                                                          |

Returns a Promise which resolves to the following object:

| Field | Type                                                 | Description       |
| ----- | ---------------------------------------------------- | ----------------- |
| data  | [Response](API.md#game-statistics-types)[] `\| null` | The response data |
| error | `{ message: string } \| null`                        | Error data        |

### Usage

```ts
import { getMonthlyLeaderboard, GAME } from "hive-bedrock-api";

// Get the top three Skywars players from this month
const now = new Date();
const { data, error } = await getMonthlyLeaderboard(GAME.SkyWars, {
  amount: 3,
  date: now,
});
```

## getAllTimeStats(playerIdentifier[, game, options])

Get a player's all-time statistics.

| Parameter             | Type                        | Required     | Description                                                                                                                                                                       |
| --------------------- | --------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| playerIdentifier      | `string`                    | **Required** | The player's gamertag or UUID of which to get stats for                                                                                                                           |
| game                  | `GAME \| GAME[]`            | _optional_   | The game identifier - see [GAME](API.md#games). When specifying multiple games in an array, will return array of results for each game. When not specified, will return all games |
| options               | `object`                    | _optional_   | Options is an object with the fields below:                                                                                                                                       |
| options.fetch         | `object`                    | _optional_   | Fetch options:                                                                                                                                                                    |
| options.fetch.headers | `{ [key: string]: string }` | _optional_   | Any custom headers to apply to the fetch method                                                                                                                                   |

Returns a Promise which resolves to the following object:

| Field  | Type                                               | Description            |
| ------ | -------------------------------------------------- | ---------------------- |
| data   | [Response](API.md#game-statistics-types) `\| null` | The response data      |
| error  | `{ message: string } \| null`                      | Error data             |
| player | [PlayerInfo](API.md#playerinfo)                    | Additional player info |

### Usage

```ts
import { getAllTimeStats, GAME } from "hive-bedrock-api";

// Get GAMERTAG's all-time Hide and Seek stats
const { data, error } = await getAllTimeStats("GAMERTAG", GAME.HideAndSeek);
```

## getAllTimeLeaderboard(game[, options])

Get the all-time leaderboard for a game or games.

| Parameter             | Type                        | Required     | Description                                                                                                                            |
| --------------------- | --------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| game                  | `GAME \| GAME[]`            | **Required** | The game identifier - see [GAME](API.md#games). When specifying multiple games in an array, will return array of results for each game |
| options               | `object`                    | _optional_   | Options is an object with the fields below:                                                                                            |
| options.fetch         | `object`                    | _optional_   | Fetch options:                                                                                                                         |
| options.fetch.headers | `{ [key: string]: string }` | _optional_   | Any custom headers to apply to the fetch method                                                                                        |

Returns a Promise which resolves to the following object:

| Field | Type                                                 | Description       |
| ----- | ---------------------------------------------------- | ----------------- |
| data  | [Response](API.md#game-statistics-types)[] `\| null` | The response data |
| error | `{ message: string } \| null`                        | Error data        |

### Usage

```ts
import { getAllTimeLeaderboard, GAME } from "hive-bedrock-api";

// Get the all-time leaderboard for Survival Games
const { data, error } = await getAllTimeLeaderboard(GAME.SurvivalGames);
```

## getGlobalStatistics([options])

Get special data such as each game's all-time player count.

| Parameter             | Type                        | Required   | Description                                     |
| --------------------- | --------------------------- | ---------- | ----------------------------------------------- |
| options               | `object`                    | _optional_ | Options is an object with the fields below:     |
| options.fetch         | `object`                    | _optional_ | Fetch options:                                  |
| options.fetch.headers | `{ [key: string]: string }` | _optional_ | Any custom headers to apply to the fetch method |

Returns a Promise which resolves to the following object:

| Field | Type                                             | Description       |
| ----- | ------------------------------------------------ | ----------------- |
| data  | [Response](API.md#global-statistics)[] `\| null` | The response data |
| error | `{ message: string } \| null`                    | Error data        |

### Usage

```ts
import { getGlobalStatistics } from "hive-bedrock-api";

// Get global statistics
const { data, error } = await getGlobalStatistics();
```

## getMaps(game[, options])

Fetch data about a specific game's currently active maps.
If the game has got only one map, returned data will be null and the error message will say so.

| Parameter             | Type                        | Required     | Description                                     |
| --------------------- | --------------------------- | ------------ | ----------------------------------------------- |
| game                  | `GAME`                      | **Required** | The game identifier - see [GAME](API.md#games)  |
| options               | `object`                    | _optional_   | Options is an object with the fields below:     |
| options.fetch         | `object`                    | _optional_   | Fetch options:                                  |
| options.fetch.headers | `{ [key: string]: string }` | _optional_   | Any custom headers to apply to the fetch method |

Returns a Promise which resolves to the following object:

| Field | Type                                   | Description       |
| ----- | -------------------------------------- | ----------------- |
| data  | [MapData](API.md#map-data)[] `\| null` | The response data |
| error | `{ message: string } \| null`          | Error data        |

Allowed games (games with only one map don't work):

- BlockDrop
- CaptureTheFlag
- DeathRun
- Gravity
- GroundWars
- HideAndSeek
- MurderMystery
- Skywars
- SurvivalGames
- TreasureWars

### Usage

```ts
import { getMaps, GAME } from "hive-bedrock-api";

// Get all currently active Skywars maps' data.
const { data, error } = await getMaps(GAME.Skywars);
```

## getPlayerInfo(playerIdentifier[, options])

Get a player's information, such as current/longest login streak, currently equipped and all unlocked cosmetics, and number of quests completed.

| Parameter             | Type                        | Required     | Description                                        |
| --------------------- | --------------------------- | ------------ | -------------------------------------------------- |
| playerIdentifier      | `string`                    | **Required** | The player's gamertag or UUID of which to get info |
| options               | `object`                    | _optional_   | Options is an object with the fields below:        |
| options.fetch         | `object`                    | _optional_   | Fetch options:                                     |
| options.fetch.headers | `{ [key: string]: string }` | _optional_   | Any custom headers to apply to the fetch method    |

Returns a Promise which resolves to the following object

| Field | Type                                      | Description       |
| ----- | ----------------------------------------- | ----------------- |
| data  | [PlayerInfo](API.md#playerinfo) `\| null` | The response data |
| error | `{ message: string } \| null`             | Error data        |

### Usage

```ts
import { getPlayerInfo } from "hive-bedrock-api";

// Get GAMERTAG's player info.
const { data, error } = await getPlayerInfo("GAMERTAG");
```

## PlayerInfo

PlayerInfo object structure

| Field                      | Type             | Description                                             |
| -------------------------- | ---------------- | ------------------------------------------------------- |
| UUID                       | `string`         | The player's UUID                                       |
| xuid                       | `string`         | The player's XUID (Xbox User ID)                        |
| username                   | `string`         | The player's username                                   |
| username_cc                | `string`         | The player's correctly capitalised username             |
| rank                       | `RANK`           | The player's [rank](API.md#player-ranks)                |
| first_played               | `Date`           | The date when the player first played on The Hive       |
| daily_login_streak         | `number`         | The player's current daily login streak                 |
| longest_daily_login_streak | `number`         | The player's longest daily login streak                 |
| hub_title_count            | `number`         | How many hub titles the player currently owns           |
| hub_title_unlocked         | `string[]`       | All of the player's owned hub titles                    |
| costume_count              | `number`         | How many costumes the player currently owns             |
| costume_unlocked           | `string[]`       | All of the player's owned costumes' names               |
| avatar_count               | `number`         | How many avatars the player currently owns              |
| avatar_unlocked            | `AVATAR[]`       | All of the player's owned [avatars](API.md#avatar)      |
| friend_count               | `number`         | How many friends the player has got on the server       |
| equipped_hub_title         | `string \| null` | The player's currently equipped hub title               |
| equipped_costume           | `string \| null` | The player's currently equipped costume's name          |
| equipped_avatar            | `AVATAR \| null` | The player's currently equipped [avatar](API.md#avatar) |
| quest_count                | `number`         | How many quests the player has ever completed           |
| paid_ranks                 | `RANK[]`         | All of the player's paid [ranks](API.md#player-ranks)   |

## Avatar

The structure of the avatar object.

| Field | Type     | Description                   |
| ----- | -------- | ----------------------------- |
| name  | `string` | The name of the avatar        |
| url   | `string` | The URL of the avatar's image |

## Map data

| Field   | Type                              | Description                   |
| ------- | --------------------------------- | ----------------------------- |
| name    | `string`                          | The name of the map           |
| season  | [MAP_SEASON](API.md#map-season)   | The season the map belongs to |
| variant | [MAP_VARIANT](API.md#map-variant) | The variant of map            |
| image   | `string`                          | URL to an image of the map    |

## Map season

The season of the map.

| Key                  | Value        |
| -------------------- | ------------ |
| MAP_SEASON.None      | `NO_SEASON`  |
| MAP_SEASON.Winter    | `WINTERFEST` |
| MAP_SEASON.Spring    | `SPRING`     |
| MAP_SEASON.Summer    | `SUMMER`     |
| MAP_SEASON.Halloween | `HALLOWEEN`  |
| MAP_SEASON.Autumn    | `AUTUMN`     |

## Map variant

The variant of the map.

| Key                 | Value     |
| ------------------- | --------- |
| MAP_VARIANT.Regular | `REGULAR` |
| MAP_VARIANT.Duos    | `DUOS`    |
| MAP_VARIANT.Trios   | `TRIOS`   |
| MAP_VARIANT.Squads  | `SQUADS`  |
| MAP_VARIANT.Mega    | `MEGA`    |
| MAP_VARIANT.Royale  | `ROYALE`  |

## Player ranks

All possible player ranks.

| Key                   | Value               | Description                                                     |
| --------------------- | ------------------- | --------------------------------------------------------------- |
| RANK.Regular          | `REGULAR`           | A normal player, no extra ranks.                                |
| RANK.Plus             | `PLUS`              | Hive Plus rank.                                                 |
| RANK.Youtuber         | `YOUTUBER`          | YouTube [partner rank](https://support.playhive.com/partner/).  |
| RANK.Streamer         | `STREAMER`          | Streamer [partner rank](https://support.playhive.com/partner/). |
| RANK.Tiktok           | `TIKTOK`            | TikTok [partner rank](https://support.playhive.com/partner/).   |
| RANK.VIP              | `VIP`               | Very Important Person rank.                                     |
| RANK.Helper           | `HELPER`            | Hive Helper.                                                    |
| RANK.Moderator        | `MODERATOR`         | Hive Moderator.                                                 |
| RANK.Hive             | `HIVE_TEAM`         | Part of The Hive staff team.                                    |
| RANK.StaffManager     | `STAFF_MANAGER`     | Staff Manager for The Hive.                                     |
| RANK.CommunityManager | `COMMUNITY_MANAGER` | Community Manager for The Hive.                                 |
| RANK.Owner            | `OWNER`             | Owner of The Hive.                                              |

## Game statistics types

When fetching a monthly or all-time leaderboards or statistics, the returned objects will have the below structures per game.
When fetching a specific player's statistics, one object will be returned for each game statistics were fetched for; when fetching a leaderboard, one object for each player, all with the same structure (as they belong to the same game).
Fields which are only present in _All-Time statistics_, _Monthly statistics_, or _Leaderboards_ are marked as such.

<details>
  <summary>Treasure wars</summary>

## Treasure Wars

| Field              | Type     | Description                                                                                     |
| ------------------ | -------- | ----------------------------------------------------------------------------------------------- |
| UUID               | `string` | _Only when getting all-time stats or leaderboards_ - The UUID of the player                     |
| index              | `number` | _Only when getting monthly stats or leaderboards_ - The index                                   |
| human_index        | `number` | _Only when getting monthly stats or leaderboards_ - The human index                             |
| username           | `string` | _Only when getting monthly stats or leaderboards_ - The player's correctly capitalised username |
| id                 | `string` | The ID of the game (`wars` in this case)                                                        |
| xp                 | `number` | Total XP of the player                                                                          |
| level              | `number` | Current level (calculated by the wrapper)                                                       |
| played             | `number` | How many times the player has played this game                                                  |
| first_played       | `Date`   | _Only when getting all-time stats_ - The time the player first played this game                 |
| victories          | `number` | The number of times the player has won this game                                                |
| losses             | `number` | The number of times the player has lost this game                                               |
| win_percentage     | `number` | The percentage of wins to total amount of games played                                          |
| kdr                | `number` | Ratio of kills to deaths                                                                        |
| deaths             | `number` | How many times the player has died in this game                                                 |
| kills              | `number` | How many other players the player has killed in this game                                       |
| final_kills        | `number` | How many other players the player has final killed in this game                                 |
| treasure_destroyed | `number` | How many treasures the player has destroyed                                                     |
| prestige           | `number` | The prestige of the player                                                                      |

</details>

<details>
  <summary>Deathrun</summary>

## Deathrun

| Field          | Type     | Description                                                                                     |
| -------------- | -------- | ----------------------------------------------------------------------------------------------- |
| UUID           | `string` | _Only when getting all-time stats or leaderboards_ - The UUID of the player                     |
| index          | `number` | _Only when getting monthly stats or leaderboards_ - The index                                   |
| human_index    | `number` | _Only when getting monthly stats or leaderboards_ - The human index                             |
| username       | `string` | _Only when getting monthly stats or leaderboards_ - The player's correctly capitalised username |
| id             | `string` | The ID of the game (`dr` in this case)                                                          |
| xp             | `number` | Total XP of the player                                                                          |
| level          | `number` | Current level (calculated by the wrapper)                                                       |
| played         | `number` | How many times the player has played this game                                                  |
| first_played   | `Date`   | _Only when getting all-time stats_ - The time the player first played this game                 |
| victories      | `number` | The number of times the player has won this game                                                |
| losses         | `number` | The number of times the player has lost this game                                               |
| win_percentage | `number` | The percentage of wins to total amount of games played                                          |
| kdr            | `number` | Ratio of kills to deaths                                                                        |
| deaths         | `number` | How many times the player has died in this game                                                 |
| kills          | `number` | How many other players the player has killed in this game                                       |
| checkpoints    | `number` | The number of checkpoints the player has crossed                                                |
| activated      | `number` | The number of traps the player has activated                                                    |

</details>

<details>
  <summary>Hide and Seek</summary>

## Hide and Seek

| Field          | Type     | Description                                                                                     |
| -------------- | -------- | ----------------------------------------------------------------------------------------------- |
| UUID           | `string` | _Only when getting all-time stats or leaderboards_ - The UUID of the player                     |
| index          | `number` | _Only when getting monthly stats or leaderboards_ - The index                                   |
| human_index    | `number` | _Only when getting monthly stats or leaderboards_ - The human index                             |
| username       | `string` | _Only when getting monthly stats or leaderboards_ - The player's correctly capitalised username |
| id             | `string` | The ID of the game (`hide` in this case)                                                        |
| xp             | `number` | Total XP of the player                                                                          |
| level          | `number` | Current level (calculated by the wrapper)                                                       |
| played         | `number` | How many times the player has played this game                                                  |
| first_played   | `Date`   | _Only when getting all-time stats_ - The time the player first played this game                 |
| victories      | `number` | The number of times the player has won this game                                                |
| losses         | `number` | The number of times the player has lost this game                                               |
| win_percentage | `number` | The percentage of wins to total amount of games played                                          |
| deaths         | `number` | How many times the player has died in this game                                                 |
| hider_kills    | `number` | The number of hiders the player has killed (as a seeker)                                        |
| seeker_kills   | `number` | The number of seekers the player has killed (as a hider)                                        |

</details>

<details>
  <summary>Murder Mystery</summary>

## Murder Mystery

| Field                 | Type     | Description                                                                                     |
| --------------------- | -------- | ----------------------------------------------------------------------------------------------- |
| UUID                  | `string` | _Only when getting all-time stats or leaderboards_ - The UUID of the player                     |
| index                 | `number` | _Only when getting monthly stats or leaderboards_ - The index                                   |
| human_index           | `number` | _Only when getting monthly stats or leaderboards_ - The human index                             |
| username              | `string` | _Only when getting monthly stats or leaderboards_ - The player's correctly capitalised username |
| id                    | `string` | The ID of the game (`murder` in this case)                                                      |
| xp                    | `number` | Total XP of the player                                                                          |
| level                 | `number` | Current level (calculated by the wrapper)                                                       |
| played                | `number` | How many times the player has played this game                                                  |
| first_played          | `Date`   | _Only when getting all-time stats_ - The time the player first played this game                 |
| victories             | `number` | The number of times the player has won this game                                                |
| losses                | `number` | The number of times the player has lost this game                                               |
| win_percentage        | `number` | The percentage of wins to total amount of games played                                          |
| kdr                   | `number` | Ratio of kills to deaths                                                                        |
| deaths                | `number` | How many times the player has died in this game                                                 |
| prestige              | `number` | The prestige of the player                                                                      |
| coins                 | `number` | How many coins the player has picked up                                                         |
| murders               | `number` | How many people the player has murdered (as the murderer)                                       |
| murderer_eliminations | `number` | How many times the player eliminated the murderer                                               |

</details>

<details>
  <summary>Survival Games</summary>

## Survival Games

| Field          | Type     | Description                                                                                     |
| -------------- | -------- | ----------------------------------------------------------------------------------------------- |
| UUID           | `string` | _Only when getting all-time stats or leaderboards_ - The UUID of the player                     |
| index          | `number` | _Only when getting monthly stats or leaderboards_ - The index                                   |
| human_index    | `number` | _Only when getting monthly stats or leaderboards_ - The human index                             |
| username       | `string` | _Only when getting monthly stats or leaderboards_ - The player's correctly capitalised username |
| id             | `string` | The ID of the game (`sg` in this case)                                                          |
| xp             | `number` | Total XP of the player                                                                          |
| level          | `number` | Current level (calculated by the wrapper)                                                       |
| played         | `number` | How many times the player has played this game                                                  |
| first_played   | `Date`   | _Only when getting all-time stats_ - The time the player first played this game                 |
| victories      | `number` | The number of times the player has won this game                                                |
| losses         | `number` | The number of times the player has lost this game                                               |
| win_percentage | `number` | The percentage of wins to total amount of games played                                          |
| kdr            | `number` | Ratio of kills to deaths                                                                        |
| deaths         | `number` | How many times the player has died in this game                                                 |
| kills          | `number` | How many other players the player has killed in this game                                       |
| crates         | `number` | How many crates the player has opened                                                           |
| deathmatches   | `number` | How many deathmatches the player has reached                                                    |
| cows           | `number` | How many cache cows the player has found                                                        |

</details>

<details>
  <summary>Skywars</summary>

## Skywars

| Field                    | Type     | Description                                                                                     |
| ------------------------ | -------- | ----------------------------------------------------------------------------------------------- |
| UUID                     | `string` | _Only when getting all-time stats or leaderboards_ - The UUID of the player                     |
| index                    | `number` | _Only when getting monthly stats or leaderboards_ - The index                                   |
| human_index              | `number` | _Only when getting monthly stats or leaderboards_ - The human index                             |
| username                 | `string` | _Only when getting monthly stats or leaderboards_ - The player's correctly capitalised username |
| id                       | `string` | The ID of the game (`sky` in this case)                                                         |
| xp                       | `number` | Total XP of the player                                                                          |
| level                    | `number` | Current level (calculated by the wrapper)                                                       |
| played                   | `number` | How many times the player has played this game                                                  |
| first_played             | `Date`   | _Only when getting all-time stats_ - The time the player first played this game                 |
| victories                | `number` | The number of times the player has won this game                                                |
| losses                   | `number` | The number of times the player has lost this game                                               |
| win_percentage           | `number` | The percentage of wins to total amount of games played                                          |
| kdr                      | `number` | Ratio of kills to deaths                                                                        |
| deaths                   | `number` | How many times the player has died in this game                                                 |
| kills                    | `number` | How many other players the player has killed in this game                                       |
| mystery_chests_destroyed | `number` | How many mystery chests the player has opened                                                   |
| ores_mined               | `number` | How many ores the player has mined                                                              |
| spells_used              | `number` | How many spells the player has used                                                             |

</details>

<details>
  <summary>Just Build</summary>

## Just Build

| Field                 | Type     | Description                                                                                     |
| --------------------- | -------- | ----------------------------------------------------------------------------------------------- |
| UUID                  | `string` | _Only when getting all-time stats or leaderboards_ - The UUID of the player                     |
| index                 | `number` | _Only when getting monthly stats or leaderboards_ - The index                                   |
| human_index           | `number` | _Only when getting monthly stats or leaderboards_ - The human index                             |
| username              | `string` | _Only when getting monthly stats or leaderboards_ - The player's correctly capitalised username |
| id                    | `string` | The ID of the game (`build` in this case)                                                       |
| xp                    | `number` | Total XP of the player                                                                          |
| level                 | `number` | Current level (calculated by the wrapper)                                                       |
| played                | `number` | How many times the player has played this game                                                  |
| first_played          | `Date`   | _Only when getting all-time stats_ - The time the player first played this game                 |
| victories             | `number` | The number of times the player has won this game                                                |
| losses                | `number` | The number of times the player has lost this game                                               |
| win_percentage        | `number` | The percentage of wins to total amount of games played                                          |
| rating_good_received  | `number` | How many times the player has died in this game                                                 |
| rating_love_received  | `number` | How many other players the player has killed in this game                                       |
| rating_meh_received   | `number` | How many mystery chests the player has opened                                                   |
| rating_okay_raceived  | `number` | How many ores the player has mined                                                              |
| rating_great_received | `number` | How many spells the player has used                                                             |

</details>

<details>
  <summary>Ground Wars</summary>

## Ground Wars

| Field             | Type     | Description                                                                                     |
| ----------------- | -------- | ----------------------------------------------------------------------------------------------- |
| UUID              | `string` | _Only when getting all-time stats or leaderboards_ - The UUID of the player                     |
| index             | `number` | _Only when getting monthly stats or leaderboards_ - The index                                   |
| human_index       | `number` | _Only when getting monthly stats or leaderboards_ - The human index                             |
| username          | `string` | _Only when getting monthly stats or leaderboards_ - The player's correctly capitalised username |
| id                | `string` | The ID of the game (`ground` in this case)                                                      |
| xp                | `number` | Total XP of the player                                                                          |
| level             | `number` | Current level (calculated by the wrapper)                                                       |
| played            | `number` | How many times the player has played this game                                                  |
| first_played      | `Date`   | _Only when getting all-time stats_ - The time the player first played this game                 |
| victories         | `number` | The number of times the player has won this game                                                |
| losses            | `number` | The number of times the player has lost this game                                               |
| win_percentage    | `number` | The percentage of wins to total amount of games played                                          |
| kdr               | `number` | Ratio of kills to deaths                                                                        |
| deaths            | `number` | How many times the player has died in this game                                                 |
| kills             | `number` | How many other players the player has killed in this game                                       |
| blocks_destroyed  | `number` | How many blocks the player has destroyed                                                        |
| blocks_placed     | `number` | How many blocks the player has placed                                                           |
| projectiles_fired | `number` | How many projectiles the player has fired                                                       |

</details>

<details>
  <summary>BlockDrop</summary>

## BlockDrop

| Field              | Type     | Description                                                                                     |
| ------------------ | -------- | ----------------------------------------------------------------------------------------------- |
| UUID               | `string` | _Only when getting all-time stats or leaderboards_ - The UUID of the player                     |
| index              | `number` | _Only when getting monthly stats or leaderboards_ - The index                                   |
| human_index        | `number` | _Only when getting monthly stats or leaderboards_ - The human index                             |
| username           | `string` | _Only when getting monthly stats or leaderboards_ - The player's correctly capitalised username |
| id                 | `string` | The ID of the game (`drop` in this case)                                                        |
| xp                 | `number` | Total XP of the player                                                                          |
| level              | `number` | Current level (calculated by the wrapper)                                                       |
| played             | `number` | How many times the player has played this game                                                  |
| first_played       | `Date`   | _Only when getting all-time stats_ - The time the player first played this game                 |
| victories          | `number` | The number of times the player has won this game                                                |
| losses             | `number` | The number of times the player has lost this game                                               |
| win_percentage     | `number` | The percentage of wins to total amount of games played                                          |
| deaths             | `number` | How many times the player has died in this game                                                 |
| blocks_destroyed   | `number` | How many blocks the player has destroyed                                                        |
| powerups_collected | `number` | How many powerups the player has collected                                                      |
| vaults_used        | `number` | How many vaults the player has used                                                             |

</details>

<details>
  <summary>Capture the Flag</summary>

## Capture the Flag

| Field          | Type     | Description                                                                                     |
| -------------- | -------- | ----------------------------------------------------------------------------------------------- |
| UUID           | `string` | _Only when getting all-time stats or leaderboards_ - The UUID of the player                     |
| index          | `number` | _Only when getting monthly stats or leaderboards_ - The index                                   |
| human_index    | `number` | _Only when getting monthly stats or leaderboards_ - The human index                             |
| username       | `string` | _Only when getting monthly stats or leaderboards_ - The player's correctly capitalised username |
| id             | `string` | The ID of the game (`ctf` in this case)                                                         |
| xp             | `number` | Total XP of the player                                                                          |
| level          | `number` | Current level (calculated by the wrapper)                                                       |
| played         | `number` | How many times the player has played this game                                                  |
| first_played   | `Date`   | _Only when getting all-time stats_ - The time the player first played this game                 |
| victories      | `number` | The number of times the player has won this game                                                |
| losses         | `number` | The number of times the player has lost this game                                               |
| win_percentage | `number` | The percentage of wins to total amount of games played                                          |
| kdr            | `number` | Ratio of kills to deaths                                                                        |
| deaths         | `number` | How many times the player has died in this game                                                 |
| kills          | `number` | How many other players the player has killed in this game                                       |
| assists        | `number` | The amount of assists                                                                           |
| flags_captured | `number` | How many flags the player has captured                                                          |
| flags_returned | `number` | How many flags the player has returned                                                          |

</details>

<details>
  <summary>BlockParty</summary>

## BlockParty

| Field              | Type     | Description                                                                                     |
| ------------------ | -------- | ----------------------------------------------------------------------------------------------- |
| UUID               | `string` | _Only when getting all-time stats or leaderboards_ - The UUID of the player                     |
| index              | `number` | _Only when getting monthly stats or leaderboards_ - The index                                   |
| human_index        | `number` | _Only when getting monthly stats or leaderboards_ - The human index                             |
| username           | `string` | _Only when getting monthly stats or leaderboards_ - The player's correctly capitalised username |
| id                 | `string` | The ID of the game (`party` in this case)                                                       |
| xp                 | `number` | Total XP of the player                                                                          |
| level              | `number` | Current level (calculated by the wrapper)                                                       |
| played             | `number` | How many times the player has played this game                                                  |
| first_played       | `Date`   | _Only when getting all-time stats_ - The time the player first played this game                 |
| victories          | `number` | The number of times the player has won this game                                                |
| losses             | `number` | The number of times the player has lost this game                                               |
| win_percentage     | `number` | The percentage of wins to total amount of games played                                          |
| powerups_collected | `number` | How many powerups the player has collected                                                      |
| rounds_survived    | `number` | How many vaults the player has used                                                             |

</details>

<details>
  <summary>The Bridge</summary>

## The Bridge

| Field          | Type     | Description                                                                                     |
| -------------- | -------- | ----------------------------------------------------------------------------------------------- |
| UUID           | `string` | _Only when getting all-time stats or leaderboards_ - The UUID of the player                     |
| index          | `number` | _Only when getting monthly stats or leaderboards_ - The index                                   |
| human_index    | `number` | _Only when getting monthly stats or leaderboards_ - The human index                             |
| username       | `string` | _Only when getting monthly stats or leaderboards_ - The player's correctly capitalised username |
| id             | `string` | The ID of the game (`bridge` in this case)                                                      |
| xp             | `number` | Total XP of the player                                                                          |
| level          | `number` | Current level (calculated by the wrapper)                                                       |
| played         | `number` | How many times the player has played this game                                                  |
| first_played   | `Date`   | _Only when getting all-time stats_ - The time the player first played this game                 |
| victories      | `number` | The number of times the player has won this game                                                |
| losses         | `number` | The number of times the player has lost this game                                               |
| win_percentage | `number` | The percentage of wins to total amount of games played                                          |
| kdr            | `number` | Ratio of kills to deaths                                                                        |
| deaths         | `number` | How many times the player has died in this game                                                 |
| kills          | `number` | How many other players the player has killed in this game                                       |
| goals          | `number` | How many goals the player has scored                                                            |

</details>

<details>
  <summary>Gravity</summary>

## Gravity

| Field                        | Type     | Description                                                                                     |
| ---------------------------- | -------- | ----------------------------------------------------------------------------------------------- |
| UUID                         | `string` | _Only when getting all-time stats or leaderboards_ - The UUID of the player                     |
| index                        | `number` | _Only when getting monthly stats or leaderboards_ - The index                                   |
| human_index                  | `number` | _Only when getting monthly stats or leaderboards_ - The human index                             |
| username                     | `string` | _Only when getting monthly stats or leaderboards_ - The player's correctly capitalised username |
| id                           | `string` | The ID of the game (`grav` in this case)                                                        |
| xp                           | `number` | Total XP of the player                                                                          |
| level                        | `number` | Current level (calculated by the wrapper)                                                       |
| played                       | `number` | How many times the player has played this game                                                  |
| first_played                 | `Date`   | _Only when getting all-time stats_ - The time the player first played this game                 |
| victories                    | `number` | The number of times the player has won this game                                                |
| losses                       | `number` | The number of times the player has lost this game                                               |
| win_percentage               | `number` | The percentage of wins to total amount of games played                                          |
| deaths                       | `number` | How many times the player has died in this game                                                 |
| maps_completed               | `number` | How many maps/rounds the player has completed                                                   |
| maps_completed_without_dying | `number` | How many maps/rounds the player has completed without dying                                     |

</details>

## Games

Each game, and its string ID

| Key                 | Value    |
| ------------------- | -------- |
| GAME.HideAndSeek    | `hide`   |
| GAME.DeathRun       | `dr`     |
| GAME.TreasureWars   | `wars`   |
| GAME.MurderMystery  | `murder` |
| GAME.SurvivalGames  | `sg`     |
| GAME.Skywars        | `sky`    |
| GAME.CaptureTheFlag | `ctf`    |
| GAME.BlockDrop      | `drop`   |
| GAME.GroundWars     | `ground` |
| GAME.JustBuild      | `build`  |
| GAME.BlockParty     | `party`  |
| GAME.TheBridge      | `bridge` |
| GAME.Gravity        | `grav`   |

## Game info

Constant with [GAME](API.md#games) as keys, and `GAME_INFO_TYPE` as properties:

| Key          | Type             | Description                                                   |
| ------------ | ---------------- | ------------------------------------------------------------- |
| id           | `string`         | The ID of the game, as in [GAME](API.md#games).               |
| maxLevel     | `number`         | The maximum level you can reach in this game.                 |
| increment    | `number`         | How much the XP requirement increases with each level gained. |
| incrementCap | `number \| null` | The level above which the increment no longer applies.        |
| prestige     | `boolean`        | Wether or not this game supports prestigeing.                 |

## Global statistics

Total player count for each game

| Key           | Type     | Description                               |
| ------------- | -------- | ----------------------------------------- |
| global        | `number` | Total player count globally               |
| main          | `number` | Main player count                         |
| `key in GAME` | `number` | Total player count for each specific game |

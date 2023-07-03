# Documentation
## getMonthlyStats(playerIdentifier, game[, options]): Promise\<[Response](API.md#game-statistics-types)>
Get a player's monthly statistics.

| Parameter        | Type             | Required     | Description |
| ---------------- | ---------------- | ------------ | ----------- |
| playerIdentifier | `string`         | **Required** | The player's gamertag or UUID of which to get stats for |
| game             | `GAME \| GAME[]` | **Required** | The game identifier - see [GAME](API.md#enum-game). When specifying multiple games in an array, will return array of results for each game |
| options.year     | `number`         | *optional*   | The year from which to get stats |
| options.month    | `number`         | *optional*   | The month from which to get stats |
| options.date     | `Date`           | *optional*   | An instance of `Date` from which to get stats (can be used interchangably with `year` + `month`) |

### Usage

```ts
import { getMonthlyStats, GAME } from "hive-bedrock-api";

// Get GAMERTAG's Treasure Wars stats from June 2023
const { data, error } = await getMonthlyStats("GAMERTAG", GAME.TreasureWars, { year: 2023, month: 6 });
```


## getMonthlyLeaderboard(game[, options]): Promise\<TODO>
Get the monthly leaderboard for a specific month.

| Parameter         | Type             | Required     | Description |
| ----------------- | ---------------- | ------------ | ----------- |
| game              | `GAME \| GAME[]` | **Required** | The game identifier - see [GAME](API.md#enum-game). When specifying multiple games in an array, will return array of results for each game |
| options.year      | `number`         | *optional*   | The year from which to get the leaderboard |
| options.month     | `number`         | *optional*   | The month from which to get the leaderboard |
| options.date      | `Date`           | *optional*   | An instance of `Date` from which to get the leaderboard (can be used interchangably with `year` + `month`) |
| options.skip      | `number`         | *optional*   | How many players to skip in the leaderboard |
| options.amount    | `number`         | *optional*   | How many players to return in the leaderboard

### Usage

```ts
import { getMonthlyLeaderboard, GAME } from "hive-bedrock-api";

// Get the top three Skywars players from this month
const now = new Date();
const { data, error } = await getMonthlyLeaderboard(GAME.SkyWars, { amount: 3, date: now });
```


## getAllTimeStats(playerIdentifier[, game]): Promise\<[Response](API.md#game-statistics-types)>
Get a player's all-time statistics.

| Parameter        | Type             | Required     | Description |
| ---------------- | ---------------- | ------------ | ----------- |
| playerIdentifier | `string`         | **Required** | The player's gamertag or UUID of which to get stats for |
| game             | `GAME \| GAME[]` | **Required** | The game identifier - see [GAME](API.md#enum-game). When specifying multiple games in an array, will return array of results for each game |

### Usage

```ts
import { getAllTimeStats, GAME } from "hive-bedrock-api";

// Get GAMERTAG's all-time Hide and Seek stats
const { data, error } = await getAllTimeStats("GAMERTAG", GAME.HideAndSeek);
```


## getAllTimeLeaderboard([game]): Promise\<TODO>
Get the all-time leaderboard for a game or games.

| Parameter | Type             | Required     | Description |
| --------- | ---------------- | ------------ | ----------- |
| game      | `GAME \| GAME[]` | **Required** | The game identifier - see [GAME](API.md#enum-game). When specifying multiple games in an array, will return array of results for each game |

### Usage

```ts
import { getAllTimeLeaderboard, GAME } from "hive-bedrock-api";

// Get the all-time leaderboard for Survival Games
const { data, error } = await getAllTimeLeaderboard(GAME.SurvivalGames);
```

## getGlobalStatistics(): Promise\<TODO>
Get special data such as each game's all-time player count.

### Usage

```ts
import { getGlobalStatistics } from "hive-bedrock-api";

// Get global statistics
const { data, error } = await getGlobalStatistics();
```

## getPlayerInfo(playerIdentifier): Promise\<TODO>
Get a player's information, such as current/longest login streak, currently equipped and all unlocked cosmetics, and number of quests completed.

- `playerIdentifier: string` - The player's gamertag or UUID of which to get info.

### Usage

```ts
import { getPlayerInfo } from "hive-bedrock-api";

// Get GAMERTAG's player info.
const { data, error } = await getPlayerInfo("GAMERTAG");
```

## type AVATAR

| Field | Type     | Description                   |
| ----- | -------- | ----------------------------- |
| name  | `string` | The name of the avatar        |
| url   | `string` | The URL of the avatar's image |

## type RANK

| Value               | Description                      |
| ------------------- | -------------------------------- |
| `REGULAR`           | A normal player, no extra ranks. |
| `PLUS`              | Hive Plus rank.                  |
| `YOUTUBER`          | YouTube [media rank](TODO).      |
| `STREAMER`          | Streamer [media rank](TODO).     |
| `TIKTOK`            | TikTok [media rank](TODO).       |
| `VIP`               | Very Important Person rank.      |
| `HELPER`            | Hive Helper.                     |
| `MODERATOR`         | Hive Moderator.                  |
| `HIVE_TEAM`         | Part of The Hive staff team.     |
| `STAFF_MANAGER`     | Staff Manager for The Hive.      |
| `COMMUNITY_MANAGER` | Community Manager for The Hive.  |
| `OWNER`             | Owner of The Hive.               |

## enum GAME

| Key            | Value    |
| -------------- | -------- |
| HideAndSeek    | `hide`   |
| DeathRun       | `dr`     |
| TreasureWars   | `wars`   |
| MurderMystery  | `murder` |
| SurvivalGames  | `sg`     |
| Skywars        | `sky`    |
| CaptureTheFlag | `ctf`    |
| BlockDrop      | `drop`   |
| GroundWars     | `ground` |
| JustBuild      | `build`  |
| BlockParty     | `party`  |
| TheBridge      | `bridge` |

## const GAME_INFO
- Const with [GAME](API.md#enum-game) as keys, and `GAME_INFO_TYPE` as properties:

| Key          | Type             | Description |
| ------------ | ---------------- | ----------- |
| id           | `string`         | The ID of the game, as in [GAME](API.md#enum-game). |
| maxLevel     | `number`         | The maximum level you can reach in this game. |
| increment    | `number`         | How much the XP requirement increases with each level gained. |
| incrementCap | `number \| null` | The level above which the increment no longer applies. |
| prestige     | `boolean`        | Wether or not this game supports prestigeing. |

## Game statistics types

<details>
  <summary>Treasure wars</summary>

  ## Treasure Wars

  | Field              | Type     | Description |
  | ------------------ | -------- | ----------- |
  | UUID               | `string` | The UUID of the player |
  | id                 | `string` | The ID of the game (`wars` in this case) |
  | xp                 | `number` | Total XP of the player |
  | level              | `number` | Current level (calculated by the wrapper) |
  | played             | `number` | How many times the player has played this game |
  | first_played       | `Date`   | The time the player first played this game |
  | victories          | `number` | The number of times the player has won this game |
  | losses             | `number` | The number of times the player has lost this game |
  | win_percentage     | `number` | The percentage of wins to total amount of games played |
  | kdr                | `number` | Ratio of kills to deaths |
  | deaths             | `number` | How many times the player has died in this game |
  | kills              | `number` | How many other players the player has killed in this game |
  | final_kills        | `number` | How many other players the player has final killed in this game |
  | treasure_destroyed | `number` | How many treasures the player has destroyed |
  | prestige           | `number` | The prestige of the player |
</details>

<details>
  <summary>Deathrun</summary>

  ## Deathrun

  | Field              | Type     | Description |
  | ------------------ | -------- | ----------- |
  | UUID               | `string` | The UUID of the player |
  | id                 | `string` | The ID of the game (`dr` in this case) |
  | xp                 | `number` | Total XP of the player |
  | level              | `number` | Current level (calculated by the wrapper) |
  | played             | `number` | How many times the player has played this game |
  | first_played       | `Date`   | The time the player first played this game |
  | victories          | `number` | The number of times the player has won this game |
  | losses             | `number` | The number of times the player has lost this game |
  | win_percentage     | `number` | The percentage of wins to total amount of games played |
  | kdr                | `number` | Ratio of kills to deaths |
  | deaths             | `number` | How many times the player has died in this game |
  | kills              | `number` | How many other players the player has killed in this game |
  | checkpoints        | `number` | The number of checkpoints the player has crossed |
  | activated          | `number` | The number of traps the player has activated |

</details>

<details>
  <summary>Hide and Seek</summary>

  ## Hide and Seek

  | Field              | Type     | Description |
  | ------------------ | -------- | ----------- |
  | UUID               | `string` | The UUID of the player |
  | id                 | `string` | The ID of the game (`hide` in this case) |
  | xp                 | `number` | Total XP of the player |
  | level              | `number` | Current level (calculated by the wrapper) |
  | played             | `number` | How many times the player has played this game |
  | first_played       | `Date`   | The time the player first played this game |
  | victories          | `number` | The number of times the player has won this game |
  | losses             | `number` | The number of times the player has lost this game |
  | win_percentage     | `number` | The percentage of wins to total amount of games played |
  | deaths             | `number` | How many times the player has died in this game |
  | hider_kills        | `number` | The number of hiders the player has killed (as a seeker) |
  | seeker_kills       | `number` | The number of seekers the player has killed (as a hider) |

</details>


<details>
  <summary>Murder Mystery</summary>

  ## Murder Mystery

  | Field                 | Type     | Description |
  | --------------------- | -------- | ----------- |
  | UUID                  | `string` | The UUID of the player |
  | id                    | `string` | The ID of the game (`murder` in this case) |
  | xp                    | `number` | Total XP of the player |
  | level                 | `number` | Current level (calculated by the wrapper) |
  | played                | `number` | How many times the player has played this game |
  | first_played          | `Date`   | The time the player first played this game |
  | victories             | `number` | The number of times the player has won this game |
  | losses                | `number` | The number of times the player has lost this game |
  | win_percentage        | `number` | The percentage of wins to total amount of games played |
  | kdr                   | `number` | Ratio of kills to deaths |
  | deaths                | `number` | How many times the player has died in this game |
  | prestige              | `number` | The prestige of the player |
  | coins                 | `number` | How many coins the player has picked up |
  | murders               | `number` | How many people the player has murdered (as the murderer) |
  | murderer_eliminations | `number` | How many times the player eliminated the murderer |

</details>


<details>
  <summary>Survival Games</summary>

  ## Survival Games

  | Field                 | Type     | Description |
  | --------------------- | -------- | ----------- |
  | UUID                  | `string` | The UUID of the player |
  | id                    | `string` | The ID of the game (`sg` in this case) |
  | xp                    | `number` | Total XP of the player |
  | level                 | `number` | Current level (calculated by the wrapper) |
  | played                | `number` | How many times the player has played this game |
  | first_played          | `Date`   | The time the player first played this game |
  | victories             | `number` | The number of times the player has won this game |
  | losses                | `number` | The number of times the player has lost this game |
  | win_percentage        | `number` | The percentage of wins to total amount of games played |
  | kdr                   | `number` | Ratio of kills to deaths |
  | deaths                | `number` | How many times the player has died in this game |
  | kills                 | `number` | How many other players the player has killed in this game |
  | crates                | `number` | How many crates the player has opened |
  | deathmatches          | `number` | How many deathmatches the player has reached |
  | cows                  | `number` | How many cache cows the player has found |

</details>


<details>
  <summary>Skywars</summary>

  ## Skywars

  | Field                    | Type     | Description |
  | ------------------------ | -------- | ----------- |
  | UUID                     | `string` | The UUID of the player |
  | id                       | `string` | The ID of the game (`sky` in this case) |
  | xp                       | `number` | Total XP of the player |
  | level                    | `number` | Current level (calculated by the wrapper) |
  | played                   | `number` | How many times the player has played this game |
  | first_played             | `Date`   | The time the player first played this game |
  | victories                | `number` | The number of times the player has won this game |
  | losses                   | `number` | The number of times the player has lost this game |
  | win_percentage           | `number` | The percentage of wins to total amount of games played |
  | kdr                      | `number` | Ratio of kills to deaths |
  | deaths                   | `number` | How many times the player has died in this game |
  | kills                    | `number` | How many other players the player has killed in this game |
  | mystery_chests_destroyed | `number` | How many mystery chests the player has opened |
  | ores_mined               | `number` | How many ores the player has mined |
  | spells_used              | `number` | How many spells the player has used |

</details>


<details>
  <summary>Just Build</summary>

  ## Just Build

  | Field                    | Type     | Description |
  | ------------------------ | -------- | ----------- |
  | UUID                     | `string` | The UUID of the player |
  | id                       | `string` | The ID of the game (`build` in this case) |
  | xp                       | `number` | Total XP of the player |
  | level                    | `number` | Current level (calculated by the wrapper) |
  | played                   | `number` | How many times the player has played this game |
  | first_played             | `Date`   | The time the player first played this game |
  | victories                | `number` | The number of times the player has won this game |
  | losses                   | `number` | The number of times the player has lost this game |
  | win_percentage           | `number` | The percentage of wins to total amount of games played |
  | rating_good_received     | `number` | How many times the player has died in this game |
  | rating_love_received     | `number` | How many other players the player has killed in this game |
  | rating_meh_received      | `number` | How many mystery chests the player has opened |
  | rating_okay_raceived     | `number` | How many ores the player has mined |
  | rating_great_received    | `number` | How many spells the player has used |

</details>


<details>
  <summary>Ground Wars</summary>

  ## Ground Wars

  | Field                 | Type     | Description |
  | --------------------- | -------- | ----------- |
  | UUID                  | `string` | The UUID of the player |
  | id                    | `string` | The ID of the game (`ground` in this case) |
  | xp                    | `number` | Total XP of the player |
  | level                 | `number` | Current level (calculated by the wrapper) |
  | played                | `number` | How many times the player has played this game |
  | first_played          | `Date`   | The time the player first played this game |
  | victories             | `number` | The number of times the player has won this game |
  | losses                | `number` | The number of times the player has lost this game |
  | win_percentage        | `number` | The percentage of wins to total amount of games played |
  | kdr                   | `number` | Ratio of kills to deaths |
  | deaths                | `number` | How many times the player has died in this game |
  | kills                 | `number` | How many other players the player has killed in this game |
  | blocks_destroyed      | `number` | How many blocks the player has destroyed |
  | blocks_placed         | `number` | How many blocks the player has placed |
  | projectiles_fired     | `number` | How many projectiles the player has fired |

</details>


<details>
  <summary>BlockDrop</summary>

  ## BlockDrop

  | Field                 | Type     | Description |
  | --------------------- | -------- | ----------- |
  | UUID                  | `string` | The UUID of the player |
  | id                    | `string` | The ID of the game (`drop` in this case) |
  | xp                    | `number` | Total XP of the player |
  | level                 | `number` | Current level (calculated by the wrapper) |
  | played                | `number` | How many times the player has played this game |
  | first_played          | `Date`   | The time the player first played this game |
  | victories             | `number` | The number of times the player has won this game |
  | losses                | `number` | The number of times the player has lost this game |
  | win_percentage        | `number` | The percentage of wins to total amount of games played |
  | deaths                | `number` | How many times the player has died in this game |
  | blocks_destroyed      | `number` | How many blocks the player has destroyed |
  | powerups_collected    | `number` | How many powerups the player has collected |
  | vaults_used           | `number` | How many vaults the player has used |

</details>


<details>
  <summary>Capture the Flag</summary>

  ## Capture the Flag

  | Field                 | Type     | Description |
  | --------------------- | -------- | ----------- |
  | UUID                  | `string` | The UUID of the player |
  | id                    | `string` | The ID of the game (`ctf` in this case) |
  | xp                    | `number` | Total XP of the player |
  | level                 | `number` | Current level (calculated by the wrapper) |
  | played                | `number` | How many times the player has played this game |
  | first_played          | `Date`   | The time the player first played this game |
  | victories             | `number` | The number of times the player has won this game |
  | losses                | `number` | The number of times the player has lost this game |
  | win_percentage        | `number` | The percentage of wins to total amount of games played |
  | kdr                   | `number` | Ratio of kills to deaths |
  | deaths                | `number` | How many times the player has died in this game |
  | kills                 | `number` | How many other players the player has killed in this game |
  | assists               | `number` | The amount of assists |
  | flags_captured        | `number` | How many flags the player has captured |
  | flags_returned        | `number` | How many flags the player has returned |

</details>


<details>
  <summary>BlockParty</summary>

  ## BlockParty

  | Field                 | Type     | Description |
  | --------------------- | -------- | ----------- |
  | UUID                  | `string` | The UUID of the player |
  | id                    | `string` | The ID of the game (`drop` in this case) |
  | xp                    | `number` | Total XP of the player |
  | level                 | `number` | Current level (calculated by the wrapper) |
  | played                | `number` | How many times the player has played this game |
  | first_played          | `Date`   | The time the player first played this game |
  | victories             | `number` | The number of times the player has won this game |
  | losses                | `number` | The number of times the player has lost this game |
  | win_percentage        | `number` | The percentage of wins to total amount of games played |
  | powerups_collected    | `number` | How many powerups the player has collected |
  | rounds_survived       | `number` | How many vaults the player has used |

</details>


<details>
  <summary>The Bridge</summary>

  ## The Bridge

  | Field                 | Type     | Description |
  | --------------------- | -------- | ----------- |
  | UUID                  | `string` | The UUID of the player |
  | id                    | `string` | The ID of the game (`ctf` in this case) |
  | xp                    | `number` | Total XP of the player |
  | level                 | `number` | Current level (calculated by the wrapper) |
  | played                | `number` | How many times the player has played this game |
  | first_played          | `Date`   | The time the player first played this game |
  | victories             | `number` | The number of times the player has won this game |
  | losses                | `number` | The number of times the player has lost this game |
  | win_percentage        | `number` | The percentage of wins to total amount of games played |
  | kdr                   | `number` | Ratio of kills to deaths |
  | deaths                | `number` | How many times the player has died in this game |
  | kills                 | `number` | How many other players the player has killed in this game |
  | goals                 | `number` | How many goals the player has scored |

</details>

### Response fields

| Game                     | TreasureWars | DeathRun | HideAndSeek | MurderMystery | SurvivalGames | Skywars | JustBuild | GroundWars | BlockDrop | CaptureTheFlag | BlockParty | TheBridge |
| ------------------------ | ------------ | -------- | ----------- | ------------- | ------------- | ------- | --------- | ---------- | --------- | -------------- | ---------- | --------- |
| UUID                     | *✓*          | *✓*     | *✓*         | *✓*           | *✓*          | *✓*     | *✓*      | *✓*        | *✓*       | *✓*            | *✓*        | *✓*       |
| id                       | *✓*          | *✓*     | *✓*         | *✓*           | *✓*          | *✓*     | *✓*      | *✓*        | *✓*       | *✓*            | *✓*        | *✓*       |
| xp                       | *✓*          | *✓*     | *✓*         | *✓*           | *✓*          | *✓*     | *✓*      | *✓*        | *✓*       | *✓*            | *✓*        | *✓*       |
| level                    | *✓*          | *✓*     | *✓*         | *✓*           | *✓*          | *✓*     | *✓*      | *✓*        | *✓*       | *✓*            | *✓*        | *✓*       |
| played                   | *✓*          | *✓*     | *✓*         | *✓*           | *✓*          | *✓*     | *✓*      | *✓*        | *✓*       | *✓*            | *✓*        | *✓*       |
| first_played             | *✓*          | *✓*     | *✓*         | *✓*           | *✓*          | *✓*     | *✓*      | *✓*        | *✓*       | *✓*            | *✓*        | *✓*       |
| victories                | *✓*          | *✓*     | *✓*         | *✓*           | *✓*          | *✓*     | *✓*      | *✓*        | *✓*       | *✓*            | *✓*        | *✓*       |
| losses                   | *✓*          | *✓*     | *✓*         | *✓*           | *✓*          | *✓*     | *✓*      | *✓*        | *✓*       | *✓*            | *✓*        | *✓*       |
| win_percentage           | *✓*          | *✓*     | *✓*         | *✓*           | *✓*          | *✓*     | *✓*      | *✓*        | *✓*       | *✓*            | *✓*        | *✓*       |
| kdr                      | *✓*          | *✓*     | *X*         | *✓*           | *✓*          | *✓*     | *X*       | *✓*        | *X*       | *✓*            | *X*        | *✓*       |
| deaths                   | *✓*          | *✓*     | *✓*         | *✓*           | *✓*          | *✓*     | *X*       | *✓*        | *✓*       | *✓*            | *X*        | *✓*       |
| kills                    | *✓*          | *✓*     | *X*         | *X*           | *✓*           | *✓*    | *X*       | *✓*        | *X*       | *✓*            | *X*        | *✓*       |
| final_kills              | *✓*          | *X*      | *X*         | *X*           | *X*          | *X*     | *X*       | *X*        | *X*       | *X*            | *X*        | *X*       |
| hider_kills              | *X*          | *X*      | *✓*         | *X*           | *X*          | *X*     | *X*       | *X*        | *X*       | *X*            | *X*        | *X*       |
| seeker_kills             | *X*          | *X*      | *✓*         | *X*           | *X*          | *X*     | *X*       | *X*        | *X*       | *X*            | *X*        | *X*       |
| checkpoints              | *X*          | *✓*     | *X*          | *X*           | *X*          | *X*     | *X*       | *X*        | *X*       | *X*            | *X*        | *X*       |
| activated                | *X*          | *✓*     | *X*          | *X*           | *X*          | *X*     | *X*       | *X*        | *X*       | *X*            | *X*        | *X*       |
| treasure_destroyed       | *✓*          | *X*     | *X*          | *X*           | *X*          | *X*     | *X*       | *X*        | *X*       | *X*            | *X*        | *X*       |
| prestige                 | *✓*          | *X*     | *X*          | *✓*          | *X*           | *X*     | *X*       | *X*        | *X*       | *X*            | *X*        | *X*       |
| coins                    | *X*          | *X*      | *X*         | *✓*           | *X*          | *X*     | *X*       | *X*        | *X*       | *X*            | *X*        | *X*       |
| murders                  | *X*          | *X*      | *X*         | *✓*           | *X*          | *X*     | *X*       | *X*        | *X*       | *X*            | *X*        | *X*       |
| murderer_eliminations    | *X*          | *X*      | *X*         | *✓*           | *X*          | *X*     | *X*       | *X*        | *X*       | *X*            | *X*        | *X*       |
| crates                   | *X*          | *X*      | *X*         | *X*           | *✓*          | *X*     | *X*       | *X*        | *X*       | *X*            | *X*        | *X*       |
| deathmatches             | *X*          | *X*      | *X*         | *X*           | *✓*          | *X*     | *X*       | *X*        | *X*       | *X*            | *X*        | *X*       |
| cows                     | *X*          | *X*      | *X*         | *X*           | *✓*          | *X*     | *X*       | *X*        | *X*       | *X*            | *X*        | *X*       |
| mystery_chests_destroyed | *X*          | *X*      | *X*         | *X*           | *X*           | *✓*    | *X*       | *X*        | *X*       | *X*            | *X*        | *X*       |
| ores_mined               | *X*          | *X*      | *X*         | *X*           | *X*           | *✓*    | *X*       | *X*        | *X*       | *X*            | *X*        | *X*       |
| spells_used              | *X*          | *X*      | *X*         | *X*           | *X*           | *✓*    | *X*       | *X*        | *X*       | *X*            | *X*        | *X*       |
| assists                  | *X*          | *X*      | *X*         | *X*           | *X*           | *X*     | *X*       | *X*        | *X*       | *✓*            | *X*        | *X*       |
| flags_captured           | *X*          | *X*      | *X*         | *X*           | *X*           | *X*     | *X*       | *X*        | *X*       | *✓*            | *X*        | *X*       |
| flags_returned           | *X*          | *X*      | *X*         | *X*           | *X*           | *X*     | *X*       | *X*        | *X*       | *✓*            | *X*        | *X*       |
| blocks_destroyed         | *X*          | *X*      | *X*         | *X*           | *X*           | *X*     | *X*       | *✓*        | *✓*       | *X*            | *X*        | *X*       |
| powerups_collected       | *X*          | *X*      | *X*         | *X*           | *X*           | *X*     | *X*       | *X*        | *✓*       | *X*            | *✓*        | *X*       |
| vaults_used              | *X*          | *X*      | *X*         | *X*           | *X*           | *X*     | *X*       | *X*        | *✓*       | *X*            | *X*        | *X*       |
| blocks_placed            | *X*          | *X*      | *X*         | *X*           | *X*           | *X*     | *X*       | *✓*        | *X*       | *X*            | *X*        | *X*       |
| projectiles_fired        | *X*          | *X*      | *X*         | *X*           | *X*           | *X*     | *X*       | *✓*        | *X*       | *X*            | *X*        | *X*       |
| rating_good_received     | *X*          | *X*      | *X*         | *X*           | *X*           | *X*     | *✓*      | *X*        | *X*       | *X*            | *X*        | *X*       |
| rating_love_received     | *X*          | *X*      | *X*         | *X*           | *X*           | *X*     | *✓*      | *X*        | *X*       | *X*            | *X*        | *X*       |
| rating_meh_received      | *X*          | *X*      | *X*         | *X*           | *X*           | *X*     | *✓*      | *X*        | *X*       | *X*            | *X*        | *X*       |
| rating_okay_received     | *X*          | *X*      | *X*         | *X*           | *X*           | *X*     | *✓*      | *X*        | *X*       | *X*            | *X*        | *X*       |
| rating_great_received    | *X*          | *X*      | *X*         | *X*           | *X*           | *X*     | *✓*      | *X*        | *X*       | *X*            | *X*        | *X*       |
| rounds_survived          | *X*          | *X*      | *X*         | *X*           | *X*           | *X*     | *X*       | *X*        | *X*       | *X*            | *✓*        | *X*       |
| goals                    | *X*          | *X*      | *X*         | *X*           | *X*           | *X*     | *X*       | *X*        | *X*       | *X*            | *X*        | *✓*       |

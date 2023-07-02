# Documentation
## getMonthlyStats(playerIdentifier, game[, options]): Promise\<TODO>
Get a player's monthly statistics.

- `playerIdentifier: string` - The player's gamertag or UUID of which to get stats for.
- `game: GAME | GAME[]` - The game identifier - see GAME enum. When specifying multiple games in an array, will return array of results for each game.
- `options` can contain: 

| Parameter       | Optional   | Description |
| --------------- | ---------- | ----------- |
| year: `number`  | *optional* | The year from which to get stats |
| month: `number` | *optional* | The month from which to get stats |
| date: `Date`    | *optional* | An instance of `Date` from which to get stats (can be used interchangably with `year` + `month`) |

### Usage

```ts
import { getMonthlyStats, GAME } from "hive-bedrock-api";

// Get GAMERTAG's Treasure Wars stats for this month
const { data, error } = await getMonthlyStats("GAMERTAG", GAME.TreasureWars);
```

## getMonthlyLeaderboard(game[, options]): Promise\<TODO>
Get the monthly leaderboard for a specific month.

- `game: GAME | GAME[]` - The game identifier - see GAME enum. When specifying multiple games in an array, will return array of results for each game.
- `options` can contain:

| Parameter        | Optional   | Description |
| ---------------- | ---------- | ----------- |
| year: `number`   | *optional* | The year from which to get the leaderboard |
| month: `number`  | *optional* | The month from which to get the leaderboard |
| date: `Date`     | *optional* | An instance of `Date` from which to get the leaderboard (can be used interchangably with `year` + `month`) |
| skip: `number`   | *optional* | How many players to skip in the leaderboard |
| amount: `number` | *optional* | How many players to return in the leaderboard

### Usage

```ts
import { getMonthlyLeaderboard, GAME } from "hive-bedrock-api";

// Get the top three players this month
const { data, error } = await getMonthlyLeaderboard(GAME.SkyWars, { amount: 3 });
```

## getAllTimeStats(playerIdentifier[, game]): Promise\<TODO>
Get a player's all-time statistics.

- `playerIdentifier: string` - The player's gamertag or UUID of which to get stats for.
- `game: GAME | GAME[]` - The game identifier - see GAME enum. When specifying multiple games in an array, will return array of results for each game.

### Usage

```ts
import { getAllTimeStats, GAME } from "hive-bedrock-api";

// Get GAMERTAG's all-time Hide and Seek stats
const { data, error } = await getAllTimeStats("GAMERTAG", GAME.HideAndSeek);
```


## getAllTimeLeaderboard([game]): Promise\<TODO>
Get the all-time leaderboard for a game or games.

- `game: GAME | GAME[]` - The game identifier - see GAME enum. When specifying multiple games in an array, will return array of results for each game.

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

## const GAME_INFO: { [key in GAME]: GAME_INFO_TYPE }
- `GAME_INFO_TYPE` is an interface with the following properties:

| Key          | Type             | Description |
| ------------ | ---------------- | ----------- |
| id           | `string`         | The ID of the game, as in the GAME enum. |
| maxLevel     | `number`         | The maximum level you can reach in this game. |
| increment    | `number`         | How much the XP requirement increases with each level gained. |
| incrementCap | `number \| null` | The level above which the increment no longer applies. |
| prestige     | `boolean`        | Wether or not this game supports prestigeing. |

## Game statistic types
### All-Time statistics

| Game                     | TreasureWars | DeathRun | HideAndSeek | MurderMystery | SurvivalGames | Skywars | JustBuild | GroundWars | BlockDrop | CaptureTheFlag | BlockParty | TheBridge |
| ------------------------ | ------------ | -------- | ----------- | ------------- | ------------- | ------- | --------- | ---------- | --------- | -------------- | ---------- | --------- |
| UUID                     | [x]          | [x]      | [x]         | [x]           | [x]           | [x]     | [x]       | [x]        | [x]       | [x]            | [x]        | [x]       |
| id                       | [x]          | [x]      | [x]         | [x]           | [x]           | [x]     | [x]       | [x]        | [x]       | [x]            | [x]        | [x]       |
| xp                       | [x]          | [x]      | [x]         | [x]           | [x]           | [x]     | [x]       | [x]        | [x]       | [x]            | [x]        | [x]       |
| level                    | [x]          | [x]      | [x]         | [x]           | [x]           | [x]     | [x]       | [x]        | [x]       | [x]            | [x]        | [x]       |
| played                   | [x]          | [x]      | [x]         | [x]           | [x]           | [x]     | [x]       | [x]        | [x]       | [x]            | [x]        | [x]       |
| first_played             | [x]          | [x]      | [x]         | [x]           | [x]           | [x]     | [x]       | [x]        | [x]       | [x]            | [x]        | [x]       |
| victories                | [x]          | [x]      | [x]         | [x]           | [x]           | [x]     | [x]       | [x]        | [x]       | [x]            | [x]        | [x]       |
| losses                   | [x]          | [x]      | [x]         | [x]           | [x]           | [x]     | [x]       | [x]        | [x]       | [x]            | [x]        | [x]       |
| win_percentage           | [x]          | [x]      | [x]         | [x]           | [x]           | [x]     | [x]       | [x]        | [x]       | [x]            | [x]        | [x]       |
| kdr                      | [x]          | [x]      | [ ]         | [x]           | [x]           | [x]     | [ ]       | [x]        | [ ]       | [x]            | [ ]        | [x]       |
| deaths                   | [x]          | [x]      | [x]         | [x]           | [x]           | [x]     | [ ]       | [x]        | [x]       | [x]            | [ ]        | [x]       |
| kills                    | [x]          | [x]      | [ ]         | [ ]           | [x]           | [x]     | [ ]       | [x]        | [ ]       | [x]            | [ ]        | [x]       |
| final_kills              | [x]          | [ ]      | [ ]         | [ ]           | [ ]           | [ ]     | [ ]       | [ ]        | [ ]       | [ ]            | [ ]        | [ ]       |
| hider_kills              | [ ]          | [ ]      | [x]         | [ ]           | [ ]           | [ ]     | [ ]       | [ ]        | [ ]       | [ ]            | [ ]        | [ ]       |
| seeker_kills             | [ ]          | [ ]      | [x]         | [ ]           | [ ]           | [ ]     | [ ]       | [ ]        | [ ]       | [ ]            | [ ]        | [ ]       |
| checkpoints              | [ ]          | [x]      | [ ]         | [ ]           | [ ]           | [ ]     | [ ]       | [ ]        | [ ]       | [ ]            | [ ]        | [ ]       |
| activated                | [ ]          | [x]      | [ ]         | [ ]           | [ ]           | [ ]     | [ ]       | [ ]        | [ ]       | [ ]            | [ ]        | [ ]       |
| treasure_destroyed       | [x]          | [ ]      | [ ]         | [ ]           | [ ]           | [ ]     | [ ]       | [ ]        | [ ]       | [ ]            | [ ]        | [ ]       |
| prestige                 | [x]          | [ ]      | [ ]         | [x]           | [ ]           | [ ]     | [ ]       | [ ]        | [ ]       | [ ]            | [ ]        | [ ]       |
| coins                    | [ ]          | [ ]      | [ ]         | [x]           | [ ]           | [ ]     | [ ]       | [ ]        | [ ]       | [ ]            | [ ]        | [ ]       |
| murders                  | [ ]          | [ ]      | [ ]         | [x]           | [ ]           | [ ]     | [ ]       | [ ]        | [ ]       | [ ]            | [ ]        | [ ]       |
| murderer_eliminations    | [ ]          | [ ]      | [ ]         | [x]           | [ ]           | [ ]     | [ ]       | [ ]        | [ ]       | [ ]            | [ ]        | [ ]       |
| crates                   | [ ]          | [ ]      | [ ]         | [ ]           | [x]           | [ ]     | [ ]       | [ ]        | [ ]       | [ ]            | [ ]        | [ ]       |
| deathmatches             | [ ]          | [ ]      | [ ]         | [ ]           | [x]           | [ ]     | [ ]       | [ ]        | [ ]       | [ ]            | [ ]        | [ ]       |
| cows                     | [ ]          | [ ]      | [ ]         | [ ]           | [x]           | [ ]     | [ ]       | [ ]        | [ ]       | [ ]            | [ ]        | [ ]       |
| mystery_chests_destroyed | [ ]          | [ ]      | [ ]         | [ ]           | [ ]           | [x]     | [ ]       | [ ]        | [ ]       | [ ]            | [ ]        | [ ]       |
| ores_mined               | [ ]          | [ ]      | [ ]         | [ ]           | [ ]           | [x]     | [ ]       | [ ]        | [ ]       | [ ]            | [ ]        | [ ]       |
| spells_used              | [ ]          | [ ]      | [ ]         | [ ]           | [ ]           | [x]     | [ ]       | [ ]        | [ ]       | [ ]            | [ ]        | [ ]       |
| assists                  | [ ]          | [ ]      | [ ]         | [ ]           | [ ]           | [ ]     | [ ]       | [ ]        | [ ]       | [x]            | [ ]        | [ ]       |
| flags_captured           | [ ]          | [ ]      | [ ]         | [ ]           | [ ]           | [ ]     | [ ]       | [ ]        | [ ]       | [x]            | [ ]        | [ ]       |
| flags_returned           | [ ]          | [ ]      | [ ]         | [ ]           | [ ]           | [ ]     | [ ]       | [ ]        | [ ]       | [x]            | [ ]        | [ ]       |
| blocks_destroyed         | [ ]          | [ ]      | [ ]         | [ ]           | [ ]           | [ ]     | [ ]       | [x]        | [x]       | [ ]            | [ ]        | [ ]       |
| powerups_collected       | [ ]          | [ ]      | [ ]         | [ ]           | [ ]           | [ ]     | [ ]       | [ ]        | [x]       | [ ]            | [x]        | [ ]       |
| vaults_used              | [ ]          | [ ]      | [ ]         | [ ]           | [ ]           | [ ]     | [ ]       | [ ]        | [x]       | [ ]            | [ ]        | [ ]       |
| blocks_placed            | [ ]          | [ ]      | [ ]         | [ ]           | [ ]           | [ ]     | [ ]       | [x]        | [ ]       | [ ]            | [ ]        | [ ]       |
| projectiles_fired        | [ ]          | [ ]      | [ ]         | [ ]           | [ ]           | [ ]     | [ ]       | [x]        | [ ]       | [ ]            | [ ]        | [ ]       |
| rating_good_received     | [ ]          | [ ]      | [ ]         | [ ]           | [ ]           | [ ]     | [x]       | [ ]        | [ ]       | [ ]            | [ ]        | [ ]       |
| rating_love_received     | [ ]          | [ ]      | [ ]         | [ ]           | [ ]           | [ ]     | [x]       | [ ]        | [ ]       | [ ]            | [ ]        | [ ]       |
| rating_meh_received      | [ ]          | [ ]      | [ ]         | [ ]           | [ ]           | [ ]     | [x]       | [ ]        | [ ]       | [ ]            | [ ]        | [ ]       |
| rating_okay_received     | [ ]          | [ ]      | [ ]         | [ ]           | [ ]           | [ ]     | [x]       | [ ]        | [ ]       | [ ]            | [ ]        | [ ]       |
| rating_great_received    | [ ]          | [ ]      | [ ]         | [ ]           | [ ]           | [ ]     | [x]       | [ ]        | [ ]       | [ ]            | [ ]        | [ ]       |
| rounds_survived          | [ ]          | [ ]      | [ ]         | [ ]           | [ ]           | [ ]     | [ ]       | [ ]        | [ ]       | [ ]            | [x]        | [ ]       |
| goals                    | [ ]          | [ ]      | [ ]         | [ ]           | [ ]           | [ ]     | [ ]       | [ ]        | [ ]       | [ ]            | [x]        | [x]       |

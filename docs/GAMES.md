# Game statistics types

When fetching a monthly or all-time leaderboards or statistics, the returned objects will have the below structures per game.
When fetching a specific player's statistics, one object will be returned for each game statistics were fetched for; when fetching a leaderboard, one object for each player, all with the same structure (as they belong to the same game).
Fields which are only present in _All-Time statistics_, _Monthly statistics_, or _Leaderboards_ are marked as such.

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
| first_played       | `number` | _Only when getting all-time stats_ - The unix timestamp the player first played this game       |
| victories          | `number` | The number of times the player has won this game                                                |
| losses             | `number` | The number of times the player has lost this game                                               |
| win_percentage     | `number` | The percentage of wins to total amount of games played                                          |
| kdr                | `number` | Ratio of kills to deaths                                                                        |
| deaths             | `number` | How many times the player has died in this game                                                 |
| kills              | `number` | How many other players the player has killed in this game                                       |
| final_kills        | `number` | How many other players the player has final killed in this game                                 |
| treasure_destroyed | `number` | How many treasures the player has destroyed                                                     |
| prestige           | `number` | The prestige of the player                                                                      |

## BedWars

| Field          | Type     | Description                                                                                     |
| -------------- | -------- | ----------------------------------------------------------------------------------------------- |
| UUID           | `string` | _Only when getting all-time stats or leaderboards_ - The UUID of the player                     |
| index          | `number` | _Only when getting monthly stats or leaderboards_ - The index                                   |
| human_index    | `number` | _Only when getting monthly stats or leaderboards_ - The human index                             |
| username       | `string` | _Only when getting monthly stats or leaderboards_ - The player's correctly capitalised username |
| id             | `string` | The ID of the game (`bed` in this case)                                                         |
| xp             | `number` | Total XP of the player                                                                          |
| level          | `number` | Current level (calculated by the wrapper)                                                       |
| played         | `number` | How many times the player has played this game                                                  |
| first_played   | `number` | _Only when getting all-time stats_ - The unix timestamp the player first played this game       |
| victories      | `number` | The number of times the player has won this game                                                |
| losses         | `number` | The number of times the player has lost this game                                               |
| win_percentage | `number` | The percentage of wins to total amount of games played                                          |
| kdr            | `number` | Ratio of kills to deaths                                                                        |
| deaths         | `number` | How many times the player has died in this game                                                 |
| kills          | `number` | How many other players the player has killed in this game                                       |
| final_kills    | `number` | How many other players the player has final killed in this game                                 |
| beds_destroyed | `number` | How many beds the player has destroyed                                                          |

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
| first_played   | `number` | _Only when getting all-time stats_ - The unix timestamp the player first played this game       |
| victories      | `number` | The number of times the player has won this game                                                |
| losses         | `number` | The number of times the player has lost this game                                               |
| win_percentage | `number` | The percentage of wins to total amount of games played                                          |
| kdr            | `number` | Ratio of kills to deaths                                                                        |
| deaths         | `number` | How many times the player has died in this game                                                 |
| kills          | `number` | How many other players the player has killed in this game                                       |
| checkpoints    | `number` | The number of checkpoints the player has crossed                                                |
| activated      | `number` | The number of traps the player has activated                                                    |

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
| first_played   | `number` | _Only when getting all-time stats_ - The unix timestamp the player first played this game       |
| victories      | `number` | The number of times the player has won this game                                                |
| losses         | `number` | The number of times the player has lost this game                                               |
| win_percentage | `number` | The percentage of wins to total amount of games played                                          |
| deaths         | `number` | How many times the player has died in this game                                                 |
| hider_kills    | `number` | The number of hiders the player has killed (as a seeker)                                        |
| seeker_kills   | `number` | The number of seekers the player has killed (as a hider)                                        |
| kdr            | `number` | Ratio of kills to deaths                                                                        |

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
| first_played          | `number` | _Only when getting all-time stats_ - The unix timestamp the player first played this game       |
| victories             | `number` | The number of times the player has won this game                                                |
| losses                | `number` | The number of times the player has lost this game                                               |
| win_percentage        | `number` | The percentage of wins to total amount of games played                                          |
| kdr                   | `number` | Ratio of kills to deaths                                                                        |
| deaths                | `number` | How many times the player has died in this game                                                 |
| prestige              | `number` | The prestige of the player                                                                      |
| coins                 | `number` | How many coins the player has picked up                                                         |
| murders               | `number` | How many people the player has murdered (as the murderer)                                       |
| murderer_eliminations | `number` | How many times the player eliminated the murderer                                               |

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
| first_played   | `number` | _Only when getting all-time stats_ - The unix timestamp the player first played this game       |
| victories      | `number` | The number of times the player has won this game                                                |
| losses         | `number` | The number of times the player has lost this game                                               |
| win_percentage | `number` | The percentage of wins to total amount of games played                                          |
| kdr            | `number` | Ratio of kills to deaths                                                                        |
| deaths         | `number` | How many times the player has died in this game                                                 |
| kills          | `number` | How many other players the player has killed in this game                                       |
| crates         | `number` | How many crates the player has opened                                                           |
| deathmatches   | `number` | How many deathmatches the player has reached                                                    |
| cows           | `number` | How many cache cows the player has found                                                        |

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
| first_played             | `number` | _Only when getting all-time stats_ - The unix timestamp the player first played this game       |
| victories                | `number` | The number of times the player has won this game                                                |
| losses                   | `number` | The number of times the player has lost this game                                               |
| win_percentage           | `number` | The percentage of wins to total amount of games played                                          |
| kdr                      | `number` | Ratio of kills to deaths                                                                        |
| deaths                   | `number` | How many times the player has died in this game                                                 |
| kills                    | `number` | How many other players the player has killed in this game                                       |
| mystery_chests_destroyed | `number` | How many mystery chests the player has opened                                                   |
| ores_mined               | `number` | How many ores the player has mined                                                              |
| spells_used              | `number` | How many spells the player has used                                                             |

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
| first_played          | `number` | _Only when getting all-time stats_ - The unix timestamp the player first played this game       |
| victories             | `number` | The number of times the player has won this game                                                |
| losses                | `number` | The number of times the player has lost this game                                               |
| win_percentage        | `number` | The percentage of wins to total amount of games played                                          |
| rating_good_received  | `number` | How many times the player has died in this game                                                 |
| rating_love_received  | `number` | How many other players the player has killed in this game                                       |
| rating_meh_received   | `number` | How many mystery chests the player has opened                                                   |
| rating_okay_raceived  | `number` | How many ores the player has mined                                                              |
| rating_great_received | `number` | How many spells the player has used                                                             |
| total_ratings         | `number` | The sum of all the players ratings                                                              |

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
| first_played      | `number` | _Only when getting all-time stats_ - The unix timestamp the player first played this game       |
| victories         | `number` | The number of times the player has won this game                                                |
| losses            | `number` | The number of times the player has lost this game                                               |
| win_percentage    | `number` | The percentage of wins to total amount of games played                                          |
| kdr               | `number` | Ratio of kills to deaths                                                                        |
| deaths            | `number` | How many times the player has died in this game                                                 |
| kills             | `number` | How many other players the player has killed in this game                                       |
| blocks_destroyed  | `number` | How many blocks the player has destroyed                                                        |
| blocks_placed     | `number` | How many blocks the player has placed                                                           |
| projectiles_fired | `number` | How many projectiles the player has fired                                                       |

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
| first_played       | `number` | _Only when getting all-time stats_ - The unix timestamp the player first played this game       |
| victories          | `number` | The number of times the player has won this game                                                |
| losses             | `number` | The number of times the player has lost this game                                               |
| win_percentage     | `number` | The percentage of wins to total amount of games played                                          |
| deaths             | `number` | How many times the player has died in this game                                                 |
| blocks_destroyed   | `number` | How many blocks the player has destroyed                                                        |
| powerups_collected | `number` | How many powerups the player has collected                                                      |
| vaults_used        | `number` | How many vaults the player has used                                                             |

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
| first_played   | `number` | _Only when getting all-time stats_ - The unix timestamp the player first played this game       |
| victories      | `number` | The number of times the player has won this game                                                |
| losses         | `number` | The number of times the player has lost this game                                               |
| win_percentage | `number` | The percentage of wins to total amount of games played                                          |
| kdr            | `number` | Ratio of kills to deaths                                                                        |
| deaths         | `number` | How many times the player has died in this game                                                 |
| kills          | `number` | How many other players the player has killed in this game                                       |
| assists        | `number` | The amount of assists                                                                           |
| flags_captured | `number` | How many flags the player has captured                                                          |
| flags_returned | `number` | How many flags the player has returned                                                          |

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
| first_played       | `number` | _Only when getting all-time stats_ - The unix timestamp the player first played this game       |
| victories          | `number` | The number of times the player has won this game                                                |
| losses             | `number` | The number of times the player has lost this game                                               |
| win_percentage     | `number` | The percentage of wins to total amount of games played                                          |
| powerups_collected | `number` | How many powerups the player has collected                                                      |
| rounds_survived    | `number` | How many vaults the player has used                                                             |

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
| first_played   | `number` | _Only when getting all-time stats_ - The unix timestamp the player first played this game       |
| victories      | `number` | The number of times the player has won this game                                                |
| losses         | `number` | The number of times the player has lost this game                                               |
| win_percentage | `number` | The percentage of wins to total amount of games played                                          |
| kdr            | `number` | Ratio of kills to deaths                                                                        |
| deaths         | `number` | How many times the player has died in this game                                                 |
| kills          | `number` | How many other players the player has killed in this game                                       |
| goals          | `number` | How many goals the player has scored                                                            |

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
| first_played                 | `number` | _Only when getting all-time stats_ - The unix timestamp the player first played this game       |
| victories                    | `number` | The number of times the player has won this game                                                |
| losses                       | `number` | The number of times the player has lost this game                                               |
| win_percentage               | `number` | The percentage of wins to total amount of games played                                          |
| deaths                       | `number` | How many times the player has died in this game                                                 |
| maps_completed               | `number` | How many maps/rounds the player has completed                                                   |
| maps_completed_without_dying | `number` | How many maps/rounds the player has completed without dying                                     |

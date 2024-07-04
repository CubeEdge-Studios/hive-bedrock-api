import { Game, Statistics, Timeframe } from "hive-bedrock-data";
import processKillsAndDeaths from "./helpers/processKillsAndDeaths";
import processGameAndXP from "./helpers/processGameAndXP";
import processPlayedAndVictories from "./helpers/processPlayedAndVictories";
import { OmittedSpecialStatistics } from "../types/types";

export interface Processed_TreasureWars_AllTimeStatistics
    extends OmittedSpecialStatistics<Game.TreasureWars, Timeframe.AllTime> {
    id: Game.TreasureWars;
    level: number;

    losses: number;
    win_percentage: number;

    kdr: number;
    first_played: number | null;
}
export interface Processed_TreasureWars_MonthlyStatistics
    extends Statistics<Game.TreasureWars, Timeframe.Monthly> {
    id: Game.TreasureWars;
    level: number;

    losses: number;
    win_percentage: number;

    kdr: number;
}

export function processAllTime_WARS(
    statistics: Partial<Statistics<Game.TreasureWars, Timeframe.AllTime>>
): Processed_TreasureWars_AllTimeStatistics | null {
    if (!statistics || Array.isArray(statistics)) return null;
    return {
        UUID: statistics.UUID!,

        ...processGameAndXP(Game.TreasureWars, statistics.xp),
        ...processPlayedAndVictories(statistics.played, statistics.victories),
        ...processKillsAndDeaths(statistics.kills, statistics.deaths),

        final_kills: statistics.final_kills ?? 0,
        treasure_destroyed: statistics.treasure_destroyed ?? 0,

        prestige: statistics.prestige ?? 0,
        first_played: statistics.first_played ?? null,
    };
}

export function processMonthly_WARS(
    statistics: Partial<Statistics<Game.TreasureWars, Timeframe.Monthly>>
): Processed_TreasureWars_MonthlyStatistics | null {
    if (!statistics || Array.isArray(statistics)) return null;
    let index = statistics.index ?? 0;

    return {
        index: statistics.index ?? 0,
        human_index: index + 1,
        username: statistics.username!,

        ...processGameAndXP(Game.TreasureWars, statistics.xp),
        ...processPlayedAndVictories(statistics.played, statistics.victories),
        ...processKillsAndDeaths(statistics.kills, statistics.deaths),

        final_kills: statistics.final_kills ?? 0,
        treasure_destroyed: statistics.treasure_destroyed ?? 0,

        prestige: statistics.prestige ?? 0,
    };
}

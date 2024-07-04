import { Game, Statistics, Timeframe } from "hive-bedrock-data";
import processGameAndXP from "./helpers/processGameAndXP";
import processPlayedAndVictories from "./helpers/processPlayedAndVictories";
import { OmittedSpecialStatistics } from "../types/types";
import processKillsAndDeaths from "./helpers/processKillsAndDeaths";

export interface Processed_Skywars_AllTimeStatistics
    extends OmittedSpecialStatistics<Game.Skywars, Timeframe.AllTime> {
    id: Game.Skywars;
    level: number;

    losses: number;
    win_percentage: number;

    kdr: number;
    first_played: number | null;
}
export interface Processed_Skywars_MonthlyStatistics
    extends Statistics<Game.Skywars, Timeframe.Monthly> {
    id: Game.Skywars;
    level: number;

    losses: number;
    win_percentage: number;

    kdr: number;
}

export function processAllTime_SKY(
    statistics: Partial<Statistics<Game.Skywars, Timeframe.AllTime>>
): Processed_Skywars_AllTimeStatistics | null {
    if (!statistics || Array.isArray(statistics)) return null;
    return {
        UUID: statistics.UUID!,

        ...processGameAndXP(Game.Skywars, statistics.xp),
        ...processPlayedAndVictories(statistics.played, statistics.victories),
        ...processKillsAndDeaths(statistics.kills, statistics.deaths),

        mystery_chests_destroyed: statistics.mystery_chests_destroyed ?? 0,
        ores_mined: statistics.ores_mined ?? 0,
        spells_used: statistics.spells_used ?? 0,

        first_played: statistics.first_played ?? null,
    };
}

export function processMonthly_SKY(
    statistics: Partial<Statistics<Game.Skywars, Timeframe.Monthly>>
): Processed_Skywars_MonthlyStatistics | null {
    if (!statistics || Array.isArray(statistics)) return null;
    let index = statistics.index ?? 0;

    return {
        index: statistics.index ?? 0,
        human_index: index + 1,
        username: statistics.username!,

        ...processGameAndXP(Game.Skywars, statistics.xp),
        ...processPlayedAndVictories(statistics.played, statistics.victories),
        ...processKillsAndDeaths(statistics.kills, statistics.deaths),

        mystery_chests_destroyed: statistics.mystery_chests_destroyed ?? 0,
        ores_mined: statistics.ores_mined ?? 0,
        spells_used: statistics.spells_used ?? 0,
    };
}

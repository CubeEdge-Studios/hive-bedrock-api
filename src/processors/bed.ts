import { Game, Leaderboards, Statistics, Timeframe } from "hive-bedrock-data";
import processKillsAndDeaths from "./helpers/processKillsAndDeaths";
import processGameAndXP from "./helpers/processGameAndXP";
import processPlayedAndVictories from "./helpers/processPlayedAndVictories";
import { OmittedSpecialStatistics } from "../types/types";

export interface Processed_BedWars_AllTimeStatistics
    extends OmittedSpecialStatistics<Game.BedWars, Timeframe.AllTime> {
    id: Game.BedWars;
    level: number;

    losses: number;
    win_percentage: number;

    kdr: number;
    first_played: number | null;
}
export interface Processed_BedWars_MonthlyStatistics
    extends Statistics<Game.BedWars, Timeframe.Monthly> {
    id: Game.BedWars;
    level: number;

    losses: number;
    win_percentage: number;

    kdr: number;
}

export function processAllTime_BED(
    statistics: Partial<Statistics<Game.BedWars, Timeframe.AllTime>>
): Processed_BedWars_AllTimeStatistics | null {
    if (!statistics || Array.isArray(statistics)) return null;
    return {
        UUID: statistics.UUID!,

        ...processGameAndXP(Game.BedWars, statistics.xp),
        ...processPlayedAndVictories(statistics.played, statistics.victories),
        ...processKillsAndDeaths(statistics.kills, statistics.deaths),

        final_kills: statistics.final_kills ?? 0,
        beds_destroyed: statistics.beds_destroyed ?? 0,

        first_played: statistics.first_played ?? null,
    };
}

export function processMonthly_BED(
    statistics: Partial<Statistics<Game.BedWars, Timeframe.Monthly>>
): Processed_BedWars_MonthlyStatistics | null {
    if (!statistics || Array.isArray(statistics)) return null;
    let index = statistics.index ?? 0;

    return {
        index: statistics.index ?? 0,
        human_index: index + 1,
        username: statistics.username!,

        ...processGameAndXP(Game.BedWars, statistics.xp),
        ...processPlayedAndVictories(statistics.played, statistics.victories),
        ...processKillsAndDeaths(statistics.kills, statistics.deaths),

        final_kills: statistics.final_kills ?? 0,
        beds_destroyed: statistics.beds_destroyed ?? 0,
    };
}

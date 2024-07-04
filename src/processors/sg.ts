import { Game, Statistics, Timeframe } from "hive-bedrock-data";
import processGameAndXP from "./helpers/processGameAndXP";
import processPlayedAndVictories from "./helpers/processPlayedAndVictories";
import { OmittedSpecialStatistics } from "../types/types";
import processKillsAndDeaths from "./helpers/processKillsAndDeaths";

export interface Processed_SurvivalGames_AllTimeStatistics
    extends OmittedSpecialStatistics<Game.SurvivalGames, Timeframe.AllTime> {
    id: Game.SurvivalGames;
    level: number;

    losses: number;
    win_percentage: number;

    kdr: number;
    first_played: number | null;
}
export interface Processed_SurvivalGames_MonthlyStatistics
    extends Statistics<Game.SurvivalGames, Timeframe.Monthly> {
    id: Game.SurvivalGames;
    level: number;
    kdr: number;

    losses: number;
    win_percentage: number;
}

export function processAllTime_SG(
    statistics: Partial<Statistics<Game.SurvivalGames, Timeframe.AllTime>>
): Processed_SurvivalGames_AllTimeStatistics | null {
    if (!statistics || Array.isArray(statistics)) return null;
    return {
        UUID: statistics.UUID!,

        ...processGameAndXP(Game.SurvivalGames, statistics.xp),
        ...processPlayedAndVictories(statistics.played, statistics.victories),
        ...processKillsAndDeaths(statistics.kills, statistics.deaths),

        deathmatches: statistics.deathmatches ?? 0,
        flares_used: statistics.flares_used ?? 0,
        launchpads_used: statistics.launchpads_used ?? 0,
        cows: statistics.cows ?? 0,
        crates: statistics.crates ?? 0,
        teleporters_used: statistics.teleporters_used ?? 0,

        first_played: statistics.first_played ?? null,
    };
}

export function processMonthly_SG(
    statistics: Partial<Statistics<Game.SurvivalGames, Timeframe.Monthly>>
): Processed_SurvivalGames_MonthlyStatistics | null {
    if (!statistics || Array.isArray(statistics)) return null;
    let index = statistics.index ?? 0;

    return {
        index: statistics.index ?? 0,
        human_index: index + 1,
        username: statistics.username!,

        ...processGameAndXP(Game.SurvivalGames, statistics.xp),
        ...processPlayedAndVictories(statistics.played, statistics.victories),
        ...processKillsAndDeaths(statistics.kills, statistics.deaths),

        deathmatches: statistics.deathmatches ?? 0,
        flares_used: statistics.flares_used ?? 0,
        launchpads_used: statistics.launchpads_used ?? 0,
        cows: statistics.cows ?? 0,
        crates: statistics.crates ?? 0,
        teleporters_used: statistics.teleporters_used ?? 0,
    };
}

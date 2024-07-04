import { Game, Statistics, Timeframe } from "hive-bedrock-data";
import processGameAndXP from "./helpers/processGameAndXP";
import processPlayedAndVictories from "./helpers/processPlayedAndVictories";
import { OmittedSpecialStatistics } from "../types/types";
import processHiderKillsAndDeaths from "./helpers/processHiderKillsAndDeaths";

export interface Processed_HideAndSeek_AllTimeStatistics
    extends OmittedSpecialStatistics<Game.HideAndSeek, Timeframe.AllTime> {
    id: Game.HideAndSeek;
    level: number;

    losses: number;
    win_percentage: number;

    kdr: number;
    first_played: number | null;
}
export interface Processed_HideAndSeek_MonthlyStatistics
    extends Statistics<Game.HideAndSeek, Timeframe.Monthly> {
    id: Game.HideAndSeek;
    level: number;

    losses: number;
    win_percentage: number;

    kdr: number;
}

export function processAllTime_HIDE(
    statistics: Partial<Statistics<Game.HideAndSeek, Timeframe.AllTime>>
): Processed_HideAndSeek_AllTimeStatistics | null {
    if (!statistics || Array.isArray(statistics)) return null;
    return {
        UUID: statistics.UUID!,

        ...processGameAndXP(Game.HideAndSeek, statistics.xp),
        ...processPlayedAndVictories(statistics.played, statistics.victories),
        ...processHiderKillsAndDeaths(statistics.hider_kills, statistics.deaths),

        seeker_kills: statistics.seeker_kills ?? 0,

        first_played: statistics.first_played ?? null,
    };
}

export function processMonthly_HIDE(
    statistics: Partial<Statistics<Game.HideAndSeek, Timeframe.Monthly>>
): Processed_HideAndSeek_MonthlyStatistics | null {
    if (!statistics || Array.isArray(statistics)) return null;
    let index = statistics.index ?? 0;

    return {
        index: statistics.index ?? 0,
        human_index: index + 1,
        username: statistics.username!,

        ...processGameAndXP(Game.HideAndSeek, statistics.xp),
        ...processPlayedAndVictories(statistics.played, statistics.victories),
        ...processHiderKillsAndDeaths(statistics.hider_kills, statistics.deaths),

        seeker_kills: statistics.seeker_kills ?? 0,
    };
}

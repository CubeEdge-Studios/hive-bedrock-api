import { Game, Statistics, Timeframe } from "hive-bedrock-data";
import processGameAndXP from "./helpers/processGameAndXP";
import processPlayedAndVictories from "./helpers/processPlayedAndVictories";
import { OmittedSpecialStatistics } from "../types/types";
import processKillsAndDeaths from "./helpers/processKillsAndDeaths";

export interface Processed_DeathRun_AllTimeStatistics
    extends OmittedSpecialStatistics<Game.DeathRun, Timeframe.AllTime> {
    id: Game.DeathRun;
    level: number;

    losses: number;
    win_percentage: number;

    kdr: number;
    first_played: number | null;
}
export interface Processed_DeathRun_MonthlyStatistics
    extends Statistics<Game.DeathRun, Timeframe.Monthly> {
    id: Game.DeathRun;
    level: number;

    losses: number;
    win_percentage: number;

    kdr: number;
}

export function processAllTime_DR(
    statistics: Partial<Statistics<Game.DeathRun, Timeframe.AllTime>>
): Processed_DeathRun_AllTimeStatistics | null {
    if (!statistics || Array.isArray(statistics)) return null;
    return {
        UUID: statistics.UUID!,

        ...processGameAndXP(Game.DeathRun, statistics.xp),
        ...processPlayedAndVictories(statistics.played, statistics.victories),
        ...processKillsAndDeaths(statistics.kills, statistics.deaths),

        activated: statistics.activated ?? 0,
        checkpoints: statistics.checkpoints ?? 0,

        first_played: statistics.first_played ?? null,
    };
}

export function processMonthly_DR(
    statistics: Partial<Statistics<Game.DeathRun, Timeframe.Monthly>>
): Processed_DeathRun_MonthlyStatistics | null {
    if (!statistics || Array.isArray(statistics)) return null;
    let index = statistics.index ?? 0;

    return {
        index: statistics.index ?? 0,
        human_index: index + 1,
        username: statistics.username!,

        ...processGameAndXP(Game.DeathRun, statistics.xp),
        ...processPlayedAndVictories(statistics.played, statistics.victories),
        ...processKillsAndDeaths(statistics.kills, statistics.deaths),

        activated: statistics.activated ?? 0,
        checkpoints: statistics.checkpoints ?? 0,
    };
}

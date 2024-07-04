import { Game, Statistics, Timeframe } from "hive-bedrock-data";
import processGameAndXP from "./helpers/processGameAndXP";
import processPlayedAndVictories from "./helpers/processPlayedAndVictories";
import { OmittedSpecialStatistics } from "../types/types";
import processKillsAndDeaths from "./helpers/processKillsAndDeaths";

export interface Processed_CaptureTheFlag_AllTimeStatistics
    extends OmittedSpecialStatistics<Game.CaptureTheFlag, Timeframe.AllTime> {
    id: Game.CaptureTheFlag;
    level: number;

    losses: number;
    win_percentage: number;

    kdr: number;
    first_played: number | null;
}
export interface Processed_CaptureTheFlag_MonthlyStatistics
    extends Statistics<Game.CaptureTheFlag, Timeframe.Monthly> {
    id: Game.CaptureTheFlag;
    level: number;

    losses: number;
    win_percentage: number;

    kdr: number;
}

export function processAllTime_CTF(
    statistics: Partial<Statistics<Game.CaptureTheFlag, Timeframe.AllTime>>
): Processed_CaptureTheFlag_AllTimeStatistics | null {
    if (!statistics || Array.isArray(statistics)) return null;
    return {
        UUID: statistics.UUID!,

        ...processGameAndXP(Game.CaptureTheFlag, statistics.xp),
        ...processPlayedAndVictories(statistics.played, statistics.victories),
        ...processKillsAndDeaths(statistics.kills, statistics.deaths),
        assists: statistics.assists ?? 0,

        flags_captured: statistics.flags_captured ?? 0,
        flags_returned: statistics.flags_returned ?? 0,

        first_played: statistics.first_played ?? null,
    };
}

export function processMonthly_CTF(
    statistics: Partial<Statistics<Game.CaptureTheFlag, Timeframe.Monthly>>
): Processed_CaptureTheFlag_MonthlyStatistics | null {
    if (!statistics || Array.isArray(statistics)) return null;
    let index = statistics.index ?? 0;

    return {
        index: statistics.index ?? 0,
        human_index: index + 1,
        username: statistics.username!,

        ...processGameAndXP(Game.CaptureTheFlag, statistics.xp),
        ...processPlayedAndVictories(statistics.played, statistics.victories),
        ...processKillsAndDeaths(statistics.kills, statistics.deaths),
        assists: statistics.assists ?? 0,

        flags_captured: statistics.flags_captured ?? 0,
        flags_returned: statistics.flags_returned ?? 0,
    };
}

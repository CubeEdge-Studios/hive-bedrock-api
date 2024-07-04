import { Game, Statistics, Timeframe } from "hive-bedrock-data";
import processGameAndXP from "./helpers/processGameAndXP";
import processPlayedAndVictories from "./helpers/processPlayedAndVictories";
import { OmittedSpecialStatistics } from "../types/types";

export interface Processed_BlockParty_AllTimeStatistics
    extends OmittedSpecialStatistics<Game.BlockParty, Timeframe.AllTime> {
    id: Game.BlockParty;
    level: number;

    losses: number;
    win_percentage: number;

    first_played: number | null;
}
export interface Processed_BlockParty_MonthlyStatistics
    extends Statistics<Game.BlockParty, Timeframe.Monthly> {
    id: Game.BlockParty;
    level: number;

    losses: number;
    win_percentage: number;
}

export function processAllTime_PARTY(
    statistics: Partial<Statistics<Game.BlockParty, Timeframe.AllTime>>
): Processed_BlockParty_AllTimeStatistics | null {
    if (!statistics || Array.isArray(statistics)) return null;
    return {
        UUID: statistics.UUID!,

        ...processGameAndXP(Game.BlockParty, statistics.xp),
        ...processPlayedAndVictories(statistics.played, statistics.victories),

        powerups_collected: statistics.powerups_collected ?? 0,
        rounds_survived: statistics.rounds_survived ?? 0,

        first_played: statistics.first_played ?? null,
    };
}

export function processMonthly_PARTY(
    statistics: Partial<Statistics<Game.BlockParty, Timeframe.Monthly>>
): Processed_BlockParty_MonthlyStatistics | null {
    if (!statistics || Array.isArray(statistics)) return null;
    let index = statistics.index ?? 0;

    return {
        index: statistics.index ?? 0,
        human_index: index + 1,
        username: statistics.username!,

        ...processGameAndXP(Game.BlockParty, statistics.xp),
        ...processPlayedAndVictories(statistics.played, statistics.victories),

        powerups_collected: statistics.powerups_collected ?? 0,
        rounds_survived: statistics.rounds_survived ?? 0,
    };
}

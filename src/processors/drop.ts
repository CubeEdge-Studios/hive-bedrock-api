import { Game, Statistics, Timeframe } from "hive-bedrock-data";
import processGameAndXP from "./helpers/processGameAndXP";
import processPlayedAndVictories from "./helpers/processPlayedAndVictories";
import { OmittedSpecialStatistics } from "../types/types";

export interface Processed_BlockDrop_AllTimeStatistics
    extends OmittedSpecialStatistics<Game.BlockDrop, Timeframe.AllTime> {
    id: Game.BlockDrop;
    level: number;

    losses: number;
    win_percentage: number;

    first_played: number | null;
}
export interface Processed_BlockDrop_MonthlyStatistics
    extends Statistics<Game.BlockDrop, Timeframe.Monthly> {
    id: Game.BlockDrop;
    level: number;

    losses: number;
    win_percentage: number;
}

export function processAllTime_DROP(
    statistics: Partial<Statistics<Game.BlockDrop, Timeframe.AllTime>>
): Processed_BlockDrop_AllTimeStatistics | null {
    if (!statistics || Array.isArray(statistics)) return null;
    return {
        UUID: statistics.UUID!,

        ...processGameAndXP(Game.BlockDrop, statistics.xp),
        ...processPlayedAndVictories(statistics.played, statistics.victories),
        deaths: statistics.deaths ?? 0,

        blocks_destroyed: statistics.blocks_destroyed ?? 0,
        powerups_collected: statistics.powerups_collected ?? 0,
        vaults_used: statistics.vaults_used ?? 0,

        first_played: statistics.first_played ?? null,
    };
}

export function processMonthly_DROP(
    statistics: Partial<Statistics<Game.BlockDrop, Timeframe.Monthly>>
): Processed_BlockDrop_MonthlyStatistics | null {
    if (!statistics || Array.isArray(statistics)) return null;
    let index = statistics.index ?? 0;

    return {
        index: statistics.index ?? 0,
        human_index: index + 1,
        username: statistics.username!,

        ...processGameAndXP(Game.BlockDrop, statistics.xp),
        ...processPlayedAndVictories(statistics.played, statistics.victories),
        deaths: statistics.deaths ?? 0,

        blocks_destroyed: statistics.blocks_destroyed ?? 0,
        powerups_collected: statistics.powerups_collected ?? 0,
        vaults_used: statistics.vaults_used ?? 0,
    };
}

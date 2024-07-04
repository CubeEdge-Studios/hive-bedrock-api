import { Game, Statistics, Timeframe } from "hive-bedrock-data";
import processGameAndXP from "./helpers/processGameAndXP";
import processPlayedAndVictories from "./helpers/processPlayedAndVictories";
import { OmittedSpecialStatistics } from "../types/types";
import processKillsAndDeaths from "./helpers/processKillsAndDeaths";

export interface Processed_GroundWars_AllTimeStatistics
    extends OmittedSpecialStatistics<Game.GroundWars, Timeframe.AllTime> {
    id: Game.GroundWars;
    level: number;

    losses: number;
    win_percentage: number;

    kdr: number;
    first_played: number | null;
}
export interface Processed_GroundWars_MonthlyStatistics
    extends Statistics<Game.GroundWars, Timeframe.Monthly> {
    id: Game.GroundWars;
    level: number;

    losses: number;
    win_percentage: number;

    kdr: number;
}

export function processAllTime_GROUND(
    statistics: Partial<Statistics<Game.GroundWars, Timeframe.AllTime>>
): Processed_GroundWars_AllTimeStatistics | null {
    if (!statistics || Array.isArray(statistics)) return null;
    return {
        UUID: statistics.UUID!,

        ...processGameAndXP(Game.GroundWars, statistics.xp),
        ...processPlayedAndVictories(statistics.played, statistics.victories),
        ...processKillsAndDeaths(statistics.kills, statistics.deaths),

        blocks_placed: statistics.blocks_placed ?? 0,
        blocks_destroyed: statistics.blocks_destroyed ?? 0,
        projectiles_fired: statistics.projectiles_fired ?? 0,

        first_played: statistics.first_played ?? null,
    };
}

export function processMonthly_GROUND(
    statistics: Partial<Statistics<Game.GroundWars, Timeframe.Monthly>>
): Processed_GroundWars_MonthlyStatistics | null {
    if (!statistics || Array.isArray(statistics)) return null;
    let index = statistics.index ?? 0;

    return {
        index: statistics.index ?? 0,
        human_index: index + 1,
        username: statistics.username!,

        ...processGameAndXP(Game.GroundWars, statistics.xp),
        ...processPlayedAndVictories(statistics.played, statistics.victories),
        ...processKillsAndDeaths(statistics.kills, statistics.deaths),

        blocks_placed: statistics.blocks_placed ?? 0,
        blocks_destroyed: statistics.blocks_destroyed ?? 0,
        projectiles_fired: statistics.projectiles_fired ?? 0,
    };
}

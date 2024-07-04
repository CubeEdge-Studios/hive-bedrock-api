import { Game, Statistics, Timeframe } from "hive-bedrock-data";
import processGameAndXP from "./helpers/processGameAndXP";
import processPlayedAndVictories from "./helpers/processPlayedAndVictories";
import { OmittedSpecialStatistics } from "../types/types";

export interface Processed_Gravity_AllTimeStatistics
    extends OmittedSpecialStatistics<Game.Gravity, Timeframe.AllTime> {
    id: Game.Gravity;
    level: number;

    losses: number;
    win_percentage: number;

    first_played: number | null;
}
export interface Processed_Gravity_MonthlyStatistics
    extends Statistics<Game.Gravity, Timeframe.Monthly> {
    id: Game.Gravity;
    level: number;

    losses: number;
    win_percentage: number;
}

export function processAllTime_GRAV(
    statistics: Partial<Statistics<Game.Gravity, Timeframe.AllTime>>
): Processed_Gravity_AllTimeStatistics | null {
    if (!statistics || Array.isArray(statistics)) return null;
    return {
        UUID: statistics.UUID!,

        ...processGameAndXP(Game.Gravity, statistics.xp),
        ...processPlayedAndVictories(statistics.played, statistics.victories),
        deaths: statistics.deaths ?? 0,

        maps_completed: statistics.maps_completed ?? 0,
        maps_completed_without_dying: statistics.maps_completed_without_dying ?? 0,

        first_played: statistics.first_played ?? null,
    };
}

export function processMonthly_GRAV(
    statistics: Partial<Statistics<Game.Gravity, Timeframe.Monthly>>
): Processed_Gravity_MonthlyStatistics | null {
    if (!statistics || Array.isArray(statistics)) return null;
    let index = statistics.index ?? 0;

    return {
        index: statistics.index ?? 0,
        human_index: index + 1,
        username: statistics.username!,

        ...processGameAndXP(Game.Gravity, statistics.xp),
        ...processPlayedAndVictories(statistics.played, statistics.victories),
        deaths: statistics.deaths ?? 0,

        maps_completed: statistics.maps_completed ?? 0,
        maps_completed_without_dying: statistics.maps_completed_without_dying ?? 0,
    };
}

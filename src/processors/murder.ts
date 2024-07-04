import { Game, Statistics, Timeframe } from "hive-bedrock-data";
import processGameAndXP from "./helpers/processGameAndXP";
import processPlayedAndVictories from "./helpers/processPlayedAndVictories";
import { OmittedSpecialStatistics } from "../types/types";
import processMurdersAndDeaths from "./helpers/processMurdersAndDeaths";

export interface Processed_MurderMystery_AllTimeStatistics
    extends OmittedSpecialStatistics<Game.MurderMystery, Timeframe.AllTime> {
    id: Game.MurderMystery;
    level: number;

    losses: number;
    win_percentage: number;

    kdr: number;
    first_played: number | null;
}
export interface Processed_MurderMystery_MonthlyStatistics
    extends Statistics<Game.MurderMystery, Timeframe.Monthly> {
    id: Game.MurderMystery;
    level: number;

    losses: number;
    win_percentage: number;

    kdr: number;
}

export function processAllTime_MURDER(
    statistics: Partial<Statistics<Game.MurderMystery, Timeframe.AllTime>>
): Processed_MurderMystery_AllTimeStatistics | null {
    if (!statistics || Array.isArray(statistics)) return null;
    return {
        UUID: statistics.UUID!,

        ...processGameAndXP(Game.MurderMystery, statistics.xp),
        ...processPlayedAndVictories(statistics.played, statistics.victories),
        ...processMurdersAndDeaths(statistics.murders, statistics.deaths),
        murderer_eliminations: statistics.murderer_eliminations ?? 0,

        coins: statistics.coins ?? 0,

        prestige: statistics.prestige ?? 0,
        first_played: statistics.first_played ?? null,
    };
}

export function processMonthly_MURDER(
    statistics: Partial<Statistics<Game.MurderMystery, Timeframe.Monthly>>
): Processed_MurderMystery_MonthlyStatistics | null {
    if (!statistics || Array.isArray(statistics)) return null;
    let index = statistics.index ?? 0;

    return {
        index: statistics.index ?? 0,
        human_index: index + 1,
        username: statistics.username!,

        ...processGameAndXP(Game.MurderMystery, statistics.xp),
        ...processPlayedAndVictories(statistics.played, statistics.victories),
        ...processMurdersAndDeaths(statistics.murders, statistics.deaths),
        murderer_eliminations: statistics.murderer_eliminations ?? 0,

        coins: statistics.coins ?? 0,

        prestige: statistics.prestige ?? 0,
    };
}

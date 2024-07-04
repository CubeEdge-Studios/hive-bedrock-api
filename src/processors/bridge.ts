import { Game, Statistics, Timeframe } from "hive-bedrock-data";
import processGameAndXP from "./helpers/processGameAndXP";
import processPlayedAndVictories from "./helpers/processPlayedAndVictories";
import { OmittedSpecialStatistics } from "../types/types";
import processKillsAndDeaths from "./helpers/processKillsAndDeaths";

export interface Processed_TheBridge_AllTimeStatistics
    extends OmittedSpecialStatistics<Game.TheBridge, Timeframe.AllTime> {
    id: Game.TheBridge;
    level: number;

    losses: number;
    win_percentage: number;

    kdr: number;
    first_played: number | null;
}
export interface Processed_TheBridge_MonthlyStatistics
    extends Omit<
        Statistics<Game.TheBridge, Timeframe.Monthly>,
        "m_solo_played" | "m_solo_victories" | "m_solo_kills" | "m_solo_deaths" | "m_solo_goals"
    > {
    id: Game.TheBridge;
    level: number;

    played: number;
    victories: number;
    losses: number;
    win_percentage: number;

    kills: number;
    deaths: number;
    kdr: number;

    goals: number;
}

export function processAllTime_BRIDGE(
    statistics: Partial<Statistics<Game.TheBridge, Timeframe.AllTime>>
): Processed_TheBridge_AllTimeStatistics | null {
    if (!statistics || Array.isArray(statistics)) return null;
    return {
        UUID: statistics.UUID!,

        ...processGameAndXP(Game.TheBridge, statistics.xp),
        ...processPlayedAndVictories(statistics.played, statistics.victories),
        ...processKillsAndDeaths(statistics.kills, statistics.deaths),

        goals: statistics.goals ?? 0,

        first_played: statistics.first_played ?? null,
    };
}

export function processMonthly_BRIDGE(
    statistics: Partial<Statistics<Game.TheBridge, Timeframe.Monthly>>
): Processed_TheBridge_MonthlyStatistics | null {
    if (!statistics || Array.isArray(statistics)) return null;
    let index = statistics.index ?? 0;

    let played = ((statistics as any).played as number) ?? statistics.m_solo_played;
    let victories = ((statistics as any).victories as number) ?? statistics.m_solo_victories;
    let kills = ((statistics as any).kills as number) ?? statistics.m_solo_kills;
    let deaths = ((statistics as any).deaths as number) ?? statistics.m_solo_deaths;
    let goals = ((statistics as any).goals as number) ?? statistics.m_solo_goals;

    return {
        index: statistics.index ?? 0,
        human_index: index + 1,
        username: statistics.username!,

        ...processGameAndXP(Game.TheBridge, statistics.xp),
        ...processPlayedAndVictories(played, victories),
        ...processKillsAndDeaths(kills, deaths),

        goals: goals ?? 0,
    };
}

import { Game, Leaderboards, Statistics, Timeframe } from "hive-bedrock-data";

type Processor = (stats: any) => void;
export type GameProcessors = {
    [key in Game]: Processor[];
};

interface AllTimeAdditions {
    level: number;
}
interface PvPAdditions {
    kdr: number;
}

interface CommonStatistics {
    id: Game;
    played: number;
    victories: number;
    losses: number;
    win_percentage: number;
}

type BaseStatistics<G extends Game, T extends Timeframe> = Statistics<G, T> &
    CommonStatistics &
    (T extends Timeframe.AllTime ? AllTimeAdditions : unknown);
export type StatisticsResponse<G extends Game, T extends Timeframe> = AllStatistics<T>[G];
export interface AllStatistics<T extends Timeframe> {
    [Game.BlockDrop]: BaseStatistics<Game.BlockDrop, T>;
    [Game.BlockParty]: BaseStatistics<Game.BlockParty, T>;
    [Game.CaptureTheFlag]: BaseStatistics<Game.CaptureTheFlag, T> & PvPAdditions;
    [Game.DeathRun]: BaseStatistics<Game.DeathRun, T>;
    [Game.Gravity]: BaseStatistics<Game.Gravity, T>;
    [Game.GroundWars]: BaseStatistics<Game.GroundWars, T> & PvPAdditions;
    [Game.HideAndSeek]: BaseStatistics<Game.HideAndSeek, T>;
    [Game.JustBuild]: BaseStatistics<Game.JustBuild, T> & {
        total_ratings: number;
    };
    [Game.MurderMystery]: BaseStatistics<Game.MurderMystery, T>;
    [Game.Skywars]: BaseStatistics<Game.Skywars, T> & PvPAdditions;
    [Game.SurvivalGames]: BaseStatistics<Game.SurvivalGames, T> & PvPAdditions;
    [Game.TheBridge]: BaseStatistics<Game.TheBridge, T> & PvPAdditions;
    [Game.TreasureWars]: BaseStatistics<Game.TreasureWars, T> & PvPAdditions;
    [Game.BedWars]: BaseStatistics<Game.BedWars, T> & PvPAdditions;
    [Game.ParkourWorlds]: BaseStatistics<Game.ParkourWorlds, T>;
}

interface CommonLeaderboard {
    id: Game;
    played: number;
    victories: number;
    losses: number;
    win_percentage: number;
}
type BaseLeaderboard<G extends Game, T extends Timeframe> = Leaderboards<G, T> &
    CommonLeaderboard &
    (T extends Timeframe.AllTime ? AllTimeAdditions : unknown);
export type LeaderboardResponse<G extends Game, T extends Timeframe> = AllLeaderboards<T>[G];
export interface AllLeaderboards<T extends Timeframe> {
    [Game.BlockDrop]: BaseLeaderboard<Game.BlockDrop, T>[];
    [Game.BlockParty]: BaseLeaderboard<Game.BlockParty, T>[];
    [Game.CaptureTheFlag]: BaseLeaderboard<Game.CaptureTheFlag, T>[];
    [Game.DeathRun]: BaseLeaderboard<Game.DeathRun, T>[];
    [Game.Gravity]: BaseLeaderboard<Game.Gravity, T>[];
    [Game.GroundWars]: BaseLeaderboard<Game.GroundWars, T>[];
    [Game.HideAndSeek]: BaseLeaderboard<Game.HideAndSeek, T>[];
    [Game.JustBuild]: (BaseLeaderboard<Game.JustBuild, T> & {
        total_ratings: number;
    })[];
    [Game.MurderMystery]: BaseLeaderboard<Game.MurderMystery, T>[];
    [Game.Skywars]: BaseLeaderboard<Game.Skywars, T>[];
    [Game.SurvivalGames]: BaseLeaderboard<Game.SurvivalGames, T>[];
    [Game.TheBridge]: BaseLeaderboard<Game.TheBridge, T>[];
    [Game.TreasureWars]: BaseLeaderboard<Game.TreasureWars, T>[];
    [Game.BedWars]: BaseLeaderboard<Game.BedWars, T>[];
    [Game.ParkourWorlds]: unknown;
}

export type AllGameStatistics<T extends Timeframe> = {
    [key in Game]: BaseStatistics<key, T> | null;
};

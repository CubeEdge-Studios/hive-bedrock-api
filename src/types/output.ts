import {
    Game,
    Leaderboards,
    PlayerMetadata,
    Statistics,
    Timeframe,
} from "hive-bedrock-data";

type Processor = (stats: any) => void;
export type GameProcessors = {
    [key in Game]: Processor[];
};

interface CommonStatistics {
    played: number;
    victories: number;
    losses: number;
    win_percentage: number;
}
type BaseStatistics<G extends Game, T extends Timeframe> = Statistics<G, T> &
    CommonStatistics;
export type StatisticsResponse<
    G extends Game,
    T extends Timeframe
> = AllStatistics<T>[G];
export interface AllStatistics<T extends Timeframe> {
    [Game.BlockDrop]: BaseStatistics<Game.BlockDrop, T>;
    [Game.BlockParty]: BaseStatistics<Game.BlockParty, T>;
    [Game.CaptureTheFlag]: BaseStatistics<Game.CaptureTheFlag, T>;
    [Game.DeathRun]: BaseStatistics<Game.DeathRun, T>;
    [Game.Gravity]: BaseStatistics<Game.Gravity, T>;
    [Game.GroundWars]: BaseStatistics<Game.GroundWars, T>;
    [Game.HideAndSeek]: BaseStatistics<Game.HideAndSeek, T>;
    [Game.JustBuild]: BaseStatistics<Game.JustBuild, T>;
    [Game.MurderMystery]: BaseStatistics<Game.MurderMystery, T>;
    [Game.Skywars]: BaseStatistics<Game.Skywars, T>;
    [Game.SurvivalGames]: BaseStatistics<Game.SurvivalGames, T>;
    [Game.TheBridge]: BaseStatistics<Game.TheBridge, T>;
    [Game.TreasureWars]: BaseStatistics<Game.TreasureWars, T>;
}

interface CommonLeaderboard {
    played: number;
    victories: number;
    losses: number;
    win_percentage: number;
}
type BaseLeaderboard<G extends Game, T extends Timeframe> = Leaderboards<G, T> &
    CommonLeaderboard;
export type LeaderboardResponse<
    G extends Game,
    T extends Timeframe
> = AllLeaderboards<T>[G];
export interface AllLeaderboards<T extends Timeframe> {
    [Game.BlockDrop]: BaseLeaderboard<Game.BlockDrop, T>[];
    [Game.BlockParty]: BaseLeaderboard<Game.BlockParty, T>[];
    [Game.CaptureTheFlag]: BaseLeaderboard<Game.CaptureTheFlag, T>[];
    [Game.DeathRun]: BaseLeaderboard<Game.DeathRun, T>[];
    [Game.Gravity]: BaseLeaderboard<Game.Gravity, T>[];
    [Game.GroundWars]: BaseLeaderboard<Game.GroundWars, T>[];
    [Game.HideAndSeek]: BaseLeaderboard<Game.HideAndSeek, T>[];
    [Game.JustBuild]: BaseLeaderboard<Game.JustBuild, T>[];
    [Game.MurderMystery]: BaseLeaderboard<Game.MurderMystery, T>[];
    [Game.Skywars]: BaseLeaderboard<Game.Skywars, T>[];
    [Game.SurvivalGames]: BaseLeaderboard<Game.SurvivalGames, T>[];
    [Game.TheBridge]: BaseLeaderboard<Game.TheBridge, T>[];
    [Game.TreasureWars]: BaseLeaderboard<Game.TreasureWars, T>[];
}

export type AllGameStatistics<T extends Timeframe> = {
    [key in Game]: BaseStatistics<key, T> | null;
};

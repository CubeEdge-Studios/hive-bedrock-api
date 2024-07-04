import { Game, PlayerMetadata, Statistics, Timeframe } from "hive-bedrock-data";
import {
    Processed_BedWars_AllTimeStatistics,
    Processed_BedWars_MonthlyStatistics,
} from "../processors/bed";
import {
    Processed_BlockDrop_AllTimeStatistics,
    Processed_BlockDrop_MonthlyStatistics,
} from "../processors/drop";
import {
    Processed_BlockParty_AllTimeStatistics,
    Processed_BlockParty_MonthlyStatistics,
} from "../processors/party";
import {
    Processed_CaptureTheFlag_AllTimeStatistics,
    Processed_CaptureTheFlag_MonthlyStatistics,
} from "../processors/ctf";
import {
    Processed_DeathRun_AllTimeStatistics,
    Processed_DeathRun_MonthlyStatistics,
} from "../processors/dr";
import {
    Processed_Gravity_AllTimeStatistics,
    Processed_Gravity_MonthlyStatistics,
} from "../processors/grav";
import {
    Processed_GroundWars_AllTimeStatistics,
    Processed_GroundWars_MonthlyStatistics,
} from "../processors/ground";
import {
    Processed_HideAndSeek_AllTimeStatistics,
    Processed_HideAndSeek_MonthlyStatistics,
} from "../processors/hide";
import {
    Processed_JustBuild_AllTimeStatistics,
    Processed_JustBuild_MonthlyStatistics,
} from "../processors/build";
import {
    Processed_MurderMystery_AllTimeStatistics,
    Processed_MurderMystery_MonthlyStatistics,
} from "../processors/murder";
import { Processed_ParkourWorlds_AllTimeStatistics } from "../processors/parkour";
import {
    Processed_Skywars_AllTimeStatistics,
    Processed_Skywars_MonthlyStatistics,
} from "../processors/sky";
import {
    Processed_SurvivalGames_AllTimeStatistics,
    Processed_SurvivalGames_MonthlyStatistics,
} from "../processors/sg";
import {
    Processed_TheBridge_AllTimeStatistics,
    Processed_TheBridge_MonthlyStatistics,
} from "../processors/bridge";
import {
    Processed_TreasureWars_AllTimeStatistics,
    Processed_TreasureWars_MonthlyStatistics,
} from "../processors/wars";
import { Processed_Player_Statistics } from "../processors/player";

export type Processor<G extends Game, T extends Timeframe> = (
    statistics: Statistics<G, T>
) =>
    | (T extends Timeframe.AllTime ? AllTimeProcessedStatistics[G] : MonthlyProcessedStatistics[G])
    | null;
export type PlayerProcessorType = (
    statistics: PlayerMetadata
) => Processed_Player_Statistics | null;

export interface AllTimeProcessedStatistics {
    [Game.BedWars]: Processed_BedWars_AllTimeStatistics;
    [Game.BlockDrop]: Processed_BlockDrop_AllTimeStatistics;
    [Game.BlockParty]: Processed_BlockParty_AllTimeStatistics;
    [Game.CaptureTheFlag]: Processed_CaptureTheFlag_AllTimeStatistics;
    [Game.DeathRun]: Processed_DeathRun_AllTimeStatistics;
    [Game.Gravity]: Processed_Gravity_AllTimeStatistics;
    [Game.GroundWars]: Processed_GroundWars_AllTimeStatistics;
    [Game.HideAndSeek]: Processed_HideAndSeek_AllTimeStatistics;
    [Game.JustBuild]: Processed_JustBuild_AllTimeStatistics;
    [Game.MurderMystery]: Processed_MurderMystery_AllTimeStatistics;
    [Game.Skywars]: Processed_Skywars_AllTimeStatistics;
    [Game.SurvivalGames]: Processed_SurvivalGames_AllTimeStatistics;
    [Game.TheBridge]: Processed_TheBridge_AllTimeStatistics;
    [Game.TreasureWars]: Processed_TreasureWars_AllTimeStatistics;
    [Game.ParkourWorlds]: Processed_ParkourWorlds_AllTimeStatistics;
}
export type AllTimeProcessedLeaderboard<G extends Game> = AllTimeProcessedStatistics[G][];

export interface MonthlyProcessedStatistics {
    [Game.BedWars]: Processed_BedWars_MonthlyStatistics;
    [Game.BlockDrop]: Processed_BlockDrop_MonthlyStatistics;
    [Game.BlockParty]: Processed_BlockParty_MonthlyStatistics;
    [Game.CaptureTheFlag]: Processed_CaptureTheFlag_MonthlyStatistics;
    [Game.DeathRun]: Processed_DeathRun_MonthlyStatistics;
    [Game.Gravity]: Processed_Gravity_MonthlyStatistics;
    [Game.GroundWars]: Processed_GroundWars_MonthlyStatistics;
    [Game.HideAndSeek]: Processed_HideAndSeek_MonthlyStatistics;
    [Game.JustBuild]: Processed_JustBuild_MonthlyStatistics;
    [Game.MurderMystery]: Processed_MurderMystery_MonthlyStatistics;
    [Game.Skywars]: Processed_Skywars_MonthlyStatistics;
    [Game.SurvivalGames]: Processed_SurvivalGames_MonthlyStatistics;
    [Game.TheBridge]: Processed_TheBridge_MonthlyStatistics;
    [Game.TreasureWars]: Processed_TreasureWars_MonthlyStatistics;
    [Game.ParkourWorlds]: never;
}
export type MonthlyProcessedLeaderboard<G extends Game> = MonthlyProcessedStatistics[G][];

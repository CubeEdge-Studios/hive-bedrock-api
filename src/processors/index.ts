import { Game, Leaderboards, Timeframe } from "hive-bedrock-data";
import commonProcessors from "./common";
import leaderboardModifier from "./leaderboard";
import { GameProcessors } from "../types/output";

const processors = {
    statistics: {
        [Timeframe.AllTime]: {
            [Game.BlockDrop]: [...commonProcessors],
            [Game.BlockParty]: [...commonProcessors],
            [Game.CaptureTheFlag]: [...commonProcessors],
            [Game.DeathRun]: [...commonProcessors],
            [Game.Gravity]: [...commonProcessors],
            [Game.GroundWars]: [...commonProcessors],
            [Game.HideAndSeek]: [...commonProcessors],
            [Game.JustBuild]: [...commonProcessors],
            [Game.MurderMystery]: [...commonProcessors],
            [Game.Skywars]: [...commonProcessors],
            [Game.SurvivalGames]: [...commonProcessors],
            [Game.TheBridge]: [...commonProcessors],
            [Game.TreasureWars]: [...commonProcessors],
        },
        [Timeframe.Monthly]: {
            [Game.BlockDrop]: [...commonProcessors],
            [Game.BlockParty]: [...commonProcessors],
            [Game.CaptureTheFlag]: [...commonProcessors],
            [Game.DeathRun]: [...commonProcessors],
            [Game.Gravity]: [...commonProcessors],
            [Game.GroundWars]: [...commonProcessors],
            [Game.HideAndSeek]: [...commonProcessors],
            [Game.JustBuild]: [...commonProcessors],
            [Game.MurderMystery]: [...commonProcessors],
            [Game.Skywars]: [...commonProcessors],
            [Game.SurvivalGames]: [...commonProcessors],
            [Game.TheBridge]: [...commonProcessors],
            [Game.TreasureWars]: [...commonProcessors],
        },
    },
    leaderboard: {
        [Timeframe.AllTime]: {
            [Game.BlockDrop]: [leaderboardModifier(...commonProcessors)],
            [Game.BlockParty]: [leaderboardModifier(...commonProcessors)],
            [Game.CaptureTheFlag]: [leaderboardModifier(...commonProcessors)],
            [Game.DeathRun]: [leaderboardModifier(...commonProcessors)],
            [Game.Gravity]: [leaderboardModifier(...commonProcessors)],
            [Game.GroundWars]: [leaderboardModifier(...commonProcessors)],
            [Game.HideAndSeek]: [leaderboardModifier(...commonProcessors)],
            [Game.JustBuild]: [leaderboardModifier(...commonProcessors)],
            [Game.MurderMystery]: [leaderboardModifier(...commonProcessors)],
            [Game.Skywars]: [leaderboardModifier(...commonProcessors)],
            [Game.SurvivalGames]: [leaderboardModifier(...commonProcessors)],
            [Game.TheBridge]: [leaderboardModifier(...commonProcessors)],
            [Game.TreasureWars]: [leaderboardModifier(...commonProcessors)],
        } as GameProcessors,
        [Timeframe.Monthly]: {
            [Game.BlockDrop]: [leaderboardModifier(...commonProcessors)],
            [Game.BlockParty]: [leaderboardModifier(...commonProcessors)],
            [Game.CaptureTheFlag]: [leaderboardModifier(...commonProcessors)],
            [Game.DeathRun]: [leaderboardModifier(...commonProcessors)],
            [Game.Gravity]: [leaderboardModifier(...commonProcessors)],
            [Game.GroundWars]: [leaderboardModifier(...commonProcessors)],
            [Game.HideAndSeek]: [leaderboardModifier(...commonProcessors)],
            [Game.JustBuild]: [leaderboardModifier(...commonProcessors)],
            [Game.MurderMystery]: [leaderboardModifier(...commonProcessors)],
            [Game.Skywars]: [leaderboardModifier(...commonProcessors)],
            [Game.SurvivalGames]: [leaderboardModifier(...commonProcessors)],
            [Game.TheBridge]: [leaderboardModifier(...commonProcessors)],
            [Game.TreasureWars]: [leaderboardModifier(...commonProcessors)],
        } as GameProcessors,
    },
};
export default processors;

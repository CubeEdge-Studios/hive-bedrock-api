import { Game, Leaderboards, Timeframe } from "hive-bedrock-data";
import commonProcessors from "./common";
import leaderboardModifier from "./leaderboard";
import { GameProcessors } from "../types/output";
import game from "./game";
import levelProcessors from "./level";
import pvpProcessors from "./pvp";

const processors = {
    statistics: {
        [Timeframe.AllTime]: {
            [Game.BlockDrop]: [
                game(Game.BlockDrop),
                ...levelProcessors,
                ...commonProcessors,
            ],
            [Game.BlockParty]: [
                game(Game.BlockParty),
                ...levelProcessors,
                ...commonProcessors,
            ],
            [Game.CaptureTheFlag]: [
                game(Game.CaptureTheFlag),
                ...levelProcessors,
                ...pvpProcessors,
                ...commonProcessors,
            ],
            [Game.DeathRun]: [
                game(Game.DeathRun),
                ...levelProcessors,
                ...commonProcessors,
            ],
            [Game.Gravity]: [
                game(Game.Gravity),
                ...levelProcessors,
                ...commonProcessors,
            ],
            [Game.GroundWars]: [
                game(Game.GroundWars),
                ...levelProcessors,
                ...pvpProcessors,
                ...commonProcessors,
            ],
            [Game.HideAndSeek]: [
                game(Game.HideAndSeek),
                ...levelProcessors,
                ...pvpProcessors,
                ...commonProcessors,
            ],
            [Game.JustBuild]: [
                game(Game.JustBuild),
                ...levelProcessors,
                ...commonProcessors,
            ],
            [Game.MurderMystery]: [
                game(Game.MurderMystery),
                ...levelProcessors,
                ...pvpProcessors,
                ...commonProcessors,
            ],
            [Game.Skywars]: [
                game(Game.Skywars),
                ...levelProcessors,
                ...pvpProcessors,
                ...commonProcessors,
            ],
            [Game.SurvivalGames]: [
                game(Game.SurvivalGames),
                ...levelProcessors,
                ...pvpProcessors,
                ...commonProcessors,
            ],
            [Game.TheBridge]: [
                game(Game.TheBridge),
                ...levelProcessors,
                ...pvpProcessors,
                ...commonProcessors,
            ],
            [Game.TreasureWars]: [
                game(Game.TreasureWars),
                ...levelProcessors,
                ...pvpProcessors,
                ...commonProcessors,
            ],
        },
        [Timeframe.Monthly]: {
            [Game.BlockDrop]: [game(Game.BlockDrop), ...commonProcessors],
            [Game.BlockParty]: [game(Game.BlockParty), ...commonProcessors],
            [Game.CaptureTheFlag]: [
                game(Game.CaptureTheFlag),
                ...pvpProcessors,
                ...commonProcessors,
            ],
            [Game.DeathRun]: [game(Game.DeathRun), ...commonProcessors],
            [Game.Gravity]: [game(Game.Gravity), ...commonProcessors],
            [Game.GroundWars]: [
                game(Game.GroundWars),
                ...pvpProcessors,
                ...commonProcessors,
            ],
            [Game.HideAndSeek]: [
                game(Game.HideAndSeek),
                ...pvpProcessors,
                ...commonProcessors,
            ],
            [Game.JustBuild]: [game(Game.JustBuild), ...commonProcessors],
            [Game.MurderMystery]: [
                game(Game.MurderMystery),
                ...pvpProcessors,
                ...commonProcessors,
            ],
            [Game.Skywars]: [
                game(Game.Skywars),
                ...pvpProcessors,
                ...commonProcessors,
            ],
            [Game.SurvivalGames]: [
                game(Game.SurvivalGames),
                ...pvpProcessors,
                ...commonProcessors,
            ],
            [Game.TheBridge]: [
                game(Game.TheBridge),
                ...pvpProcessors,
                ...commonProcessors,
            ],
            [Game.TreasureWars]: [
                game(Game.TreasureWars),
                ...pvpProcessors,
                ...commonProcessors,
            ],
        },
    },
    leaderboard: {
        [Timeframe.AllTime]: {
            [Game.BlockDrop]: [
                leaderboardModifier(
                    game(Game.BlockDrop),
                    ...levelProcessors,
                    ...commonProcessors
                ),
            ],
            [Game.BlockParty]: [
                leaderboardModifier(
                    game(Game.BlockParty),
                    ...levelProcessors,
                    ...commonProcessors
                ),
            ],
            [Game.CaptureTheFlag]: [
                leaderboardModifier(
                    game(Game.CaptureTheFlag),
                    ...levelProcessors,
                    ...pvpProcessors,
                    ...commonProcessors
                ),
            ],
            [Game.DeathRun]: [
                leaderboardModifier(
                    game(Game.DeathRun),
                    ...levelProcessors,
                    ...commonProcessors
                ),
            ],
            [Game.Gravity]: [
                leaderboardModifier(
                    game(Game.Gravity),
                    ...levelProcessors,
                    ...commonProcessors
                ),
            ],
            [Game.GroundWars]: [
                leaderboardModifier(
                    game(Game.GroundWars),
                    ...levelProcessors,
                    ...pvpProcessors,
                    ...commonProcessors
                ),
            ],
            [Game.HideAndSeek]: [
                leaderboardModifier(
                    game(Game.HideAndSeek),
                    ...levelProcessors,
                    ...pvpProcessors,
                    ...commonProcessors
                ),
            ],
            [Game.JustBuild]: [
                leaderboardModifier(
                    game(Game.JustBuild),
                    ...levelProcessors,
                    ...commonProcessors
                ),
            ],
            [Game.MurderMystery]: [
                leaderboardModifier(
                    game(Game.MurderMystery),
                    ...levelProcessors,
                    ...pvpProcessors,
                    ...commonProcessors
                ),
            ],
            [Game.Skywars]: [
                leaderboardModifier(
                    game(Game.Skywars),
                    ...levelProcessors,
                    ...pvpProcessors,
                    ...commonProcessors
                ),
            ],
            [Game.SurvivalGames]: [
                leaderboardModifier(
                    game(Game.SurvivalGames),
                    ...levelProcessors,
                    ...pvpProcessors,
                    ...commonProcessors
                ),
            ],
            [Game.TheBridge]: [
                leaderboardModifier(
                    game(Game.TheBridge),
                    ...levelProcessors,
                    ...pvpProcessors,
                    ...commonProcessors
                ),
            ],
            [Game.TreasureWars]: [
                leaderboardModifier(
                    game(Game.TreasureWars),
                    ...levelProcessors,
                    ...pvpProcessors,
                    ...commonProcessors
                ),
            ],
        } as GameProcessors,
        [Timeframe.Monthly]: {
            [Game.BlockDrop]: [
                leaderboardModifier(game(Game.BlockDrop), ...commonProcessors),
            ],
            [Game.BlockParty]: [
                leaderboardModifier(game(Game.BlockParty), ...commonProcessors),
            ],
            [Game.CaptureTheFlag]: [
                leaderboardModifier(
                    game(Game.CaptureTheFlag),
                    ...pvpProcessors,
                    ...commonProcessors
                ),
            ],
            [Game.DeathRun]: [
                leaderboardModifier(game(Game.DeathRun), ...commonProcessors),
            ],
            [Game.Gravity]: [
                leaderboardModifier(game(Game.Gravity), ...commonProcessors),
            ],
            [Game.GroundWars]: [
                leaderboardModifier(
                    game(Game.GroundWars),
                    ...pvpProcessors,
                    ...commonProcessors
                ),
            ],
            [Game.HideAndSeek]: [
                leaderboardModifier(
                    game(Game.HideAndSeek),
                    ...pvpProcessors,
                    ...commonProcessors
                ),
            ],
            [Game.JustBuild]: [
                leaderboardModifier(game(Game.JustBuild), ...commonProcessors),
            ],
            [Game.MurderMystery]: [
                leaderboardModifier(
                    game(Game.MurderMystery),
                    ...pvpProcessors,
                    ...commonProcessors
                ),
            ],
            [Game.Skywars]: [
                leaderboardModifier(
                    game(Game.Skywars),
                    ...pvpProcessors,
                    ...commonProcessors
                ),
            ],
            [Game.SurvivalGames]: [
                leaderboardModifier(
                    game(Game.SurvivalGames),
                    ...pvpProcessors,
                    ...commonProcessors
                ),
            ],
            [Game.TheBridge]: [
                leaderboardModifier(
                    game(Game.TheBridge),
                    ...pvpProcessors,
                    ...commonProcessors
                ),
            ],
            [Game.TreasureWars]: [
                leaderboardModifier(
                    game(Game.TreasureWars),
                    ...pvpProcessors,
                    ...commonProcessors
                ),
            ],
        } as GameProcessors,
    },
};
export default processors;

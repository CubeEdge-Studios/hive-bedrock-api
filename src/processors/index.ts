import { Game, Timeframe } from "hive-bedrock-data";
import { PlayerProcessorType, Processor } from "../types/output";
import { processAllTime_BED, processMonthly_BED } from "./bed";
import { processAllTime_DROP, processMonthly_DROP } from "./drop";
import { processAllTime_PARTY, processMonthly_PARTY } from "./party";
import { processAllTime_CTF, processMonthly_CTF } from "./ctf";
import { processAllTime_DR, processMonthly_DR } from "./dr";
import { processAllTime_GRAV, processMonthly_GRAV } from "./grav";
import { processAllTime_GROUND, processMonthly_GROUND } from "./ground";
import { processAllTime_HIDE, processMonthly_HIDE } from "./hide";
import { processAllTime_BUILD, processMonthly_BUILD } from "./build";
import { processAllTime_MURDER, processMonthly_MURDER } from "./murder";
import { processAllTime_PARKOUR } from "./parkour";
import { processAllTime_SKY, processMonthly_SKY } from "./sky";
import { processAllTime_SG, processMonthly_SG } from "./sg";
import { processAllTime_BRIDGE, processMonthly_BRIDGE } from "./bridge";
import { processAllTime_WARS, processMonthly_WARS } from "./wars";
import { process_PLAYER } from "./player";

export const AllTimeProcessors: {
    [G in Game]: Processor<G, Timeframe.AllTime>;
} = {
    [Game.BedWars]: processAllTime_BED,
    [Game.BlockDrop]: processAllTime_DROP,
    [Game.BlockParty]: processAllTime_PARTY,
    [Game.CaptureTheFlag]: processAllTime_CTF,
    [Game.DeathRun]: processAllTime_DR,
    [Game.Gravity]: processAllTime_GRAV,
    [Game.GroundWars]: processAllTime_GROUND,
    [Game.HideAndSeek]: processAllTime_HIDE,
    [Game.JustBuild]: processAllTime_BUILD,
    [Game.MurderMystery]: processAllTime_MURDER,
    [Game.ParkourWorlds]: processAllTime_PARKOUR,
    [Game.Skywars]: processAllTime_SKY,
    [Game.SurvivalGames]: processAllTime_SG,
    [Game.TheBridge]: processAllTime_BRIDGE,
    [Game.TreasureWars]: processAllTime_WARS,
};

export const MonthlyProcessors: {
    [G in Game]: G extends Game.ParkourWorlds ? never : Processor<G, Timeframe.Monthly>;
} = {
    [Game.BedWars]: processMonthly_BED,
    [Game.BlockDrop]: processMonthly_DROP,
    [Game.BlockParty]: processMonthly_PARTY,
    [Game.CaptureTheFlag]: processMonthly_CTF,
    [Game.DeathRun]: processMonthly_DR,
    [Game.Gravity]: processMonthly_GRAV,
    [Game.GroundWars]: processMonthly_GROUND,
    [Game.HideAndSeek]: processMonthly_HIDE,
    [Game.JustBuild]: processMonthly_BUILD,
    [Game.MurderMystery]: processMonthly_MURDER,
    [Game.Skywars]: processMonthly_SKY,
    [Game.SurvivalGames]: processMonthly_SG,
    [Game.TheBridge]: processMonthly_BRIDGE,
    [Game.TreasureWars]: processMonthly_WARS,
    [Game.ParkourWorlds]: null as never,
};

export const LeaderboardProcessors: {
    [G in Game]: G extends Game.ParkourWorlds ? never : Processor<G, Timeframe.Monthly>;
} = {
    [Game.BedWars]: processMonthly_BED,
    [Game.BlockDrop]: processMonthly_DROP,
    [Game.BlockParty]: processMonthly_PARTY,
    [Game.CaptureTheFlag]: processMonthly_CTF,
    [Game.DeathRun]: processMonthly_DR,
    [Game.Gravity]: processMonthly_GRAV,
    [Game.GroundWars]: processMonthly_GROUND,
    [Game.HideAndSeek]: processMonthly_HIDE,
    [Game.JustBuild]: processMonthly_BUILD,
    [Game.MurderMystery]: processMonthly_MURDER,
    [Game.Skywars]: processMonthly_SKY,
    [Game.SurvivalGames]: processMonthly_SG,
    [Game.TheBridge]: processMonthly_BRIDGE,
    [Game.TreasureWars]: processMonthly_WARS,
    [Game.ParkourWorlds]: null as never,
};

export const PlayerProcessor: PlayerProcessorType = process_PLAYER;

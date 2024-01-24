export enum GAME {
    HideAndSeek = "hide",
    DeathRun = "dr",
    TreasureWars = "wars",
    MurderMystery = "murder",
    SurvivalGames = "sg",
    Skywars = "sky",
    CaptureTheFlag = "ctf",
    BlockDrop = "drop",
    GroundWars = "ground",
    JustBuild = "build",
    BlockParty = "party",
    TheBridge = "bridge",
    Gravity = "grav",
}

interface GAME_INFO_TYPE {
    id: string;
    maxLevel: number;
    increment: number;
    incrementCap: number | null;
    prestige: boolean;
}

export const GAME_INFO: { [key in GAME]: GAME_INFO_TYPE } = {
    [GAME.TreasureWars]: {
        id: GAME.TreasureWars,
        maxLevel: 100,
        increment: 150,
        incrementCap: 52,
        prestige: true,
    },
    [GAME.DeathRun]: {
        id: GAME.DeathRun,
        maxLevel: 75,
        increment: 200,
        incrementCap: 42,
        prestige: false,
    },
    [GAME.HideAndSeek]: {
        id: GAME.HideAndSeek,
        maxLevel: 75,
        increment: 100,
        incrementCap: null,
        prestige: false,
    },
    [GAME.MurderMystery]: {
        id: GAME.MurderMystery,
        maxLevel: 100,
        increment: 100,
        incrementCap: 82,
        prestige: true,
    },
    [GAME.SurvivalGames]: {
        id: GAME.SurvivalGames,
        maxLevel: 30,
        increment: 150,
        incrementCap: null,
        prestige: false,
    },
    [GAME.Skywars]: {
        id: GAME.Skywars,
        maxLevel: 75,
        increment: 150,
        incrementCap: 52,
        prestige: false,
    },
    [GAME.JustBuild]: {
        id: GAME.JustBuild,
        maxLevel: 20,
        increment: 100,
        incrementCap: null,
        prestige: false,
    },
    [GAME.GroundWars]: {
        id: GAME.GroundWars,
        maxLevel: 20,
        increment: 150,
        incrementCap: null,
        prestige: false,
    },
    [GAME.BlockDrop]: {
        id: GAME.BlockDrop,
        maxLevel: 25,
        increment: 150,
        incrementCap: 22,
        prestige: false,
    },
    [GAME.CaptureTheFlag]: {
        id: GAME.CaptureTheFlag,
        maxLevel: 50,
        increment: 150,
        incrementCap: null,
        prestige: false,
    },
    [GAME.BlockParty]: {
        id: GAME.BlockParty,
        maxLevel: 25,
        increment: 150,
        incrementCap: null,
        prestige: false,
    },
    [GAME.TheBridge]: {
        id: GAME.TheBridge,
        maxLevel: 20,
        increment: 0,
        incrementCap: null,
        prestige: false,
    },
    [GAME.Gravity]: {
        id: GAME.Gravity,
        maxLevel: 25,
        increment: 150,
        incrementCap: null,
        prestige: false,
    },
};

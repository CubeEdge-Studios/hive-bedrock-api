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
}

interface GAME_INFO_TYPE {
    maxLevel: number;
    increment: number;
    incrementCap: number | null;
    prestige: boolean;
}

export const GAME_INFO: { [key in GAME]: GAME_INFO_TYPE } = {
    wars: {
        maxLevel: 100,
        increment: 150,
        incrementCap: 52,
        prestige: true,
    },
    dr: {
        maxLevel: 75,
        increment: 200,
        incrementCap: 42,
        prestige: false,
    },
    hide: {
        maxLevel: 50,
        increment: 100,
        incrementCap: null,
        prestige: false,
    },
    murder: {
        maxLevel: 100,
        increment: 100,
        incrementCap: 82,
        prestige: true,
    },
    sg: {
        maxLevel: 30,
        increment: 150,
        incrementCap: null,
        prestige: false,
    },
    sky: {
        maxLevel: 75,
        increment: 150,
        incrementCap: 52,
        prestige: false,
    },
    build: {
        maxLevel: 20,
        increment: 100,
        incrementCap: null,
        prestige: false,
    },
    ground: {
        maxLevel: 20,
        increment: 150,
        incrementCap: null,
        prestige: false,
    },
    drop: {
        maxLevel: 25,
        increment: 150,
        incrementCap: 22,
        prestige: false,
    },
    ctf: {
        maxLevel: 20,
        increment: 150,
        incrementCap: null,
        prestige: false,
    },
    party: {
        maxLevel: 25,
        increment: 150,
        incrementCap: null,
        prestige: false,
    },
};

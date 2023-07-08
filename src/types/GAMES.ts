import {
    API_BASE_GAME_ALL,
    API_BASE_GAME_MONTHLY,
    API_BASE_LB,
    API_GAME_BRIDGE,
    API_GAME_BUILD,
    API_GAME_CTF,
    API_GAME_DR,
    API_GAME_DROP,
    API_GAME_GRAV,
    API_GAME_GROUND,
    API_GAME_HIDE,
    API_GAME_MURDER,
    API_GAME_PARTY,
    API_GAME_SG,
    API_GAME_SKY,
    API_GAME_WARS,
    API_USER_MAIN,
} from "./API";
import { GAME } from "./GAME_INFO";

export type REQUEST_ALL = {
    [G in GAME]: GAME_STATS_ALL<G>;
} & {
    main: USER_MAIN;
};
export type REQUEST_MONTHLY = {
    [G in GAME]: GAME_STATS_MONTHLY<G>;
};
export type REQUEST_LB<G extends GAME> = LB_STATS<G>[];

export type GAME_STATS<M extends BASE_GAME_ALL | BASE_GAME_MONTHLY | BASE_LB> =
    {
        [GAME.HideAndSeek]: M & GAME_HIDE;
        [GAME.DeathRun]: M & GAME_DR;
        [GAME.TreasureWars]: M & GAME_WARS;
        [GAME.MurderMystery]: M & GAME_MURDER;
        [GAME.SurvivalGames]: M & GAME_SG;
        [GAME.Skywars]: M & GAME_SKY;
        [GAME.CaptureTheFlag]: M & GAME_CTF;
        [GAME.BlockDrop]: M & GAME_DROP;
        [GAME.GroundWars]: M & GAME_GROUND;
        [GAME.JustBuild]: M & GAME_BUILD;
        [GAME.BlockParty]: M & GAME_PARTY;
        [GAME.TheBridge]: M & GAME_BRIDGE;
        [GAME.Gravity]: M & GAME_GRAV;
    };

export type LB_STATS<G extends GAME> = GAME_STATS<BASE_LB>[G];
export type GAME_STATS_ALL<G extends GAME> = GAME_STATS<BASE_GAME_ALL>[G];
export type GAME_STATS_MONTHLY<G extends GAME> =
    GAME_STATS<BASE_GAME_MONTHLY>[G];

export interface BASE_LB extends API_BASE_LB {
    id: GAME;
    level: number;
    losses: number;
    win_percentage: number;
}
export interface BASE_GAME_ALL extends Omit<API_BASE_GAME_ALL, "first_played"> {
    id: GAME;
    level: number;
    losses: number;
    first_played: Date;
    win_percentage: number;
}
export interface BASE_GAME_MONTHLY extends API_BASE_GAME_MONTHLY {
    id: GAME;
    level: number;
    losses: number;
    win_percentage: number;
}
export interface USER_MAIN extends Omit<API_USER_MAIN, "first_played"> {
    first_played: Date;
}

export interface GAME_HIDE extends API_GAME_HIDE {}
export interface GAME_DR extends API_GAME_DR {
    kdr: number;
}
export interface GAME_WARS extends API_GAME_WARS {
    kdr: number;
}
export interface GAME_MURDER extends API_GAME_MURDER {
    kdr: number;
}
export interface GAME_SG extends API_GAME_SG {
    kdr: number;
}
export interface GAME_SKY extends API_GAME_SKY {
    kdr: number;
}
export interface GAME_CTF extends API_GAME_CTF {
    kdr: number;
}
export interface GAME_DROP extends API_GAME_DROP {}
export interface GAME_GROUND extends API_GAME_GROUND {
    kdr: number;
}
export interface GAME_BUILD extends API_GAME_BUILD {}
export interface GAME_PARTY extends API_GAME_PARTY {}
export interface GAME_BRIDGE extends API_GAME_BRIDGE {
    kdr: number;
}
export interface GAME_GRAV extends API_GAME_GRAV {}

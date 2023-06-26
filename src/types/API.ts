import { GAME } from "./GAME_INFO";

export interface API_ERROR {
    request?: {
        status: number;
        statusText: string;
    };
    ratelimit?: {
        limit: string | null;
        remaining: string | null;
    };
    error?: any;
}

export type RANK =
    | "REGULAR"
    | "PLUS"
    | "YOUTUBER"
    | "STREAMER"
    | "TIKTOK"
    | "VIP"
    | "HELPER"
    | "MODERATOR"
    | "HIVE_TEAM"
    | "STAFF_MANAGER"
    | "COMMUNITY_MANAGER"
    | "OWNER";

export type API_REQUEST_ALL = {
    [G in GAME]: API_GAME_STATS_ALL<G>;
} & {
    main: API_USER_MAIN;
};

export type API_REQUEST_MONTHLY = {
    [G in GAME]: API_GAME_STATS_MONTHLY<G>;
};

export type API_REQUEST_LB<G extends GAME> = API_LB_STATS<G>[];

export type API_GAME_STATS<
    M extends API_BASE_GAME_ALL | API_BASE_GAME_MONTHLY | API_BASE_LB
> = {
    [GAME.HideAndSeek]: M & API_GAME_HIDE;
    [GAME.DeathRun]: M & API_GAME_DR;
    [GAME.TreasureWars]: M & API_GAME_WARS;
    [GAME.MurderMystery]: M & API_GAME_MURDER;
    [GAME.SurvivalGames]: M & API_GAME_SG;
    [GAME.Skywars]: M & API_GAME_SKY;
    [GAME.CaptureTheFlag]: M & API_GAME_CTF;
    [GAME.BlockDrop]: M & API_GAME_DROP;
    [GAME.GroundWars]: M & API_GAME_GROUND;
    [GAME.JustBuild]: M & API_GAME_BUILD;
    [GAME.BlockParty]: M & API_GAME_PARTY;
    [GAME.TheBridge]: M & API_GAME_BRIDGE;
};

export type API_LB_STATS<G extends GAME> = API_GAME_STATS<API_BASE_LB>[G];
export type API_GAME_STATS_ALL<G extends GAME> =
    API_GAME_STATS<API_BASE_GAME_ALL>[G];
export type API_GAME_STATS_MONTHLY<G extends GAME> =
    API_GAME_STATS<API_BASE_GAME_MONTHLY>[G];

export interface API_BASE_LB extends API_BASE_GAME_MONTHLY {
    UUID: string;
}

export interface API_GLOBAL_STATISTICS {
    unique_players: {
        [key in GAME]: number;
    } & {
        global: number;
        main: number;
    };
}

export interface API_BASE_GAME_ALL {
    UUID: string;
    xp: number;
    played: number;
    victories: number;
    first_played: number;
}

export interface API_BASE_GAME_MONTHLY {
    index: number;
    human_index: number;
    username: string;
}

export interface API_USER_MAIN {
    UUID: string;
    xuid: number;
    username: string;
    username_cc: string;
    rank: RANK;
    first_played: number;
    daily_login_streak: number;
    longest_daily_login_streak: number;
}

export interface API_GAME_HIDE {
    deaths: number;
    hider_kills: number;
    seeker_kills: number;
}

export interface API_GAME_DR {
    deaths: number;
    checkpoints: number;
    activated: number;
    kills: number;
}

export interface API_GAME_WARS {
    final_kills: number;
    kills: number;
    treasure_destroyed: number;
    deaths: number;
    prestige: number;
}

export interface API_GAME_MURDER {
    deaths: number;
    coins: number;
    murders: number;
    murderer_eliminations: number;
    prestige: number;
}

export interface API_GAME_SG {
    crates: number;
    deathmatches: number;
    cows: number;
    kills: number;
    deaths: number;
}

export interface API_GAME_SKY {
    kills: number;
    mystery_chests_destroyed: number;
    ores_mined: number;
    spells_used: number;
    deaths: number;
}

export interface API_GAME_CTF {
    assists: number;
    deaths: number;
    flags_captured: number;
    kills: number;
    flags_returned: number;
}

export interface API_GAME_DROP {
    blocks_destroyed: number;
    powerups_collected: number;
    vaults_used: number;
    deaths: number;
}

export interface API_GAME_GROUND {
    blocks_destroyed: number;
    blocks_placed: number;
    deaths: number;
    projectiles_fired: number;
    kills: number;
}

export interface API_GAME_BUILD {
    rating_good_received: number;
    rating_love_received: number;
    rating_meh_received: number;
    rating_okay_received: number;
    rating_great_received: number;
}

export interface API_GAME_PARTY {
    powerups_collected: number;
    rounds_survived: number;
}

export interface API_GAME_BRIDGE {
    deaths: number;
    goals: number;
    kills: number;
}

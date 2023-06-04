export type RANK =
    | "OWNER"
    | "REGULAR"
    | "PLUS"
    | "MODERATOR"
    | "HIVE_TEAM"
    | "STAFF_MANAGER"
    | "COMMUNITY_MANAGER"
    | "YOUTUBER"
    | "STREAMER"
    | "TIKTOK"
    | "VIP"
    | "HELPER";

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
    };

export type LB_STATS<G extends GAME> = GAME_STATS<BASE_LB>[G];
export type GAME_STATS_ALL<G extends GAME> = GAME_STATS<BASE_GAME_ALL>[G];
export type GAME_STATS_MONTHLY<G extends GAME> =
    GAME_STATS<BASE_GAME_MONTHLY>[G];

export interface BASE_LB extends BASE_GAME_MONTHLY {
    UUID: string;
}

export interface BASE_GAME_ALL {
    UUID: string;
    xp: number;
    played: number;
    victories: number;
    first_played: number;
}

export interface BASE_GAME_MONTHLY {
    index: number;
    human_index: number;
    username: string;
}

export interface USER_MAIN {
    UUID: string;
    xuid: number;
    username: string;
    username_cc: string;
    rank: RANK;
    first_played: number;
    daily_login_streak: number;
    longest_daily_login_streak: number;
}

export interface GAME_HIDE {
    deaths: number;
    hider_kills: number;
    seeker_kills: number;
}

export interface GAME_DR {
    deaths: number;
    checkpoints: number;
    activated: number;
    kills: number;
}

export interface GAME_WARS {
    final_kills: number;
    kills: number;
    treasure_destroyed: number;
    deaths: number;
    prestige: number;
}

export interface GAME_MURDER {
    deaths: number;
    coins: number;
    murders: number;
    murderer_eliminations: number;
    prestige: number;
}

export interface GAME_SG {
    crates: number;
    deathmatches: number;
    cows: number;
    kills: number;
    deaths: number;
}

export interface GAME_SKY {
    kills: number;
    mystery_chests_destroyed: number;
    ores_mined: number;
    spells_used: number;
    deaths: number;
}

export interface GAME_CTF {
    assists: number;
    deaths: number;
    flags_captured: number;
    kills: number;
    flags_returned: number;
}

export interface GAME_DROP {
    blocks_destroyed: number;
    powerups_collected: number;
    vaults_used: number;
    deaths: number;
}

export interface GAME_GROUND {
    blocks_destroyed: number;
    blocks_placed: number;
    deaths: number;
    projectiles_fired: number;
    kills: number;
}

export interface GAME_BUILD {
    rating_good_received: number;
    rating_love_received: number;
    rating_meh_received: number;
    rating_okay_received: number;
    rating_great_received: number;
}

export interface GAME_PARTY {
    powerups_collected: number;
    rounds_survived: number;
}

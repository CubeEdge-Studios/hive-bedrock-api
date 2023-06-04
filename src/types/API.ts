export type GAME =
    | "hide"
    | "dr"
    | "wars"
    | "murder"
    | "sg"
    | "sky"
    | "ctf"
    | "drop"
    | "ground"
    | "build"
    | "party";

export interface REQUEST_ALL {
    main: USER_MAIN;
    hide: GAME_HIDE_ALL;
    dr: GAME_DR_ALL;
    wars: GAME_WARS_ALL;
    murder: GAME_MURDER_ALL;
    sg: GAME_SG_ALL;
    sky: GAME_SKY_ALL;
    ctf: GAME_CTF_ALL;
    drop: GAME_DROP_ALL;
    ground: GAME_GROUND_ALL;
    build: GAME_BUILD_ALL;
    party: GAME_PARTY_ALL;
}

export interface REQUEST_MONTHLY {
    hide: GAME_HIDE_MONTHLY;
    dr: GAME_DR_MONTHLY;
    wars: GAME_WARS_MONTHLY;
    murder: GAME_MURDER_MONTHLY;
    sg: GAME_SG_MONTHLY;
    sky: GAME_SKY_MONTHLY;
    ctf: GAME_CTF_MONTHLY;
    drop: GAME_DROP_MONTHLY;
    ground: GAME_GROUND_MONTHLY;
    build: GAME_BUILD_MONTHLY;
    party: GAME_PARTY_MONTHLY;
}

export type GAME_HIDE_ALL = BASE_GAME_ALL & GAME_HIDE;
export type GAME_HIDE_MONTHLY = BASE_GAME_MONTHLY & GAME_HIDE;
export type GAME_DR_ALL = BASE_GAME_ALL & GAME_DR;
export type GAME_DR_MONTHLY = BASE_GAME_MONTHLY & GAME_DR;
export type GAME_WARS_ALL = BASE_GAME_ALL & GAME_WARS;
export type GAME_WARS_MONTHLY = BASE_GAME_MONTHLY & GAME_WARS;
export type GAME_MURDER_ALL = BASE_GAME_ALL & GAME_MURDER;
export type GAME_MURDER_MONTHLY = BASE_GAME_MONTHLY & GAME_MURDER;
export type GAME_SG_ALL = BASE_GAME_ALL & GAME_SG;
export type GAME_SG_MONTHLY = BASE_GAME_MONTHLY & GAME_SG;
export type GAME_SKY_ALL = BASE_GAME_ALL & GAME_SKY;
export type GAME_SKY_MONTHLY = BASE_GAME_MONTHLY & GAME_SKY;
export type GAME_CTF_ALL = BASE_GAME_ALL & GAME_CTF;
export type GAME_CTF_MONTHLY = BASE_GAME_MONTHLY & GAME_CTF;
export type GAME_DROP_ALL = BASE_GAME_ALL & GAME_DROP;
export type GAME_DROP_MONTHLY = BASE_GAME_MONTHLY & GAME_DROP;
export type GAME_GROUND_ALL = BASE_GAME_ALL & GAME_GROUND;
export type GAME_GROUND_MONTHLY = BASE_GAME_MONTHLY & GAME_GROUND;
export type GAME_BUILD_ALL = BASE_GAME_ALL & GAME_BUILD;
export type GAME_BUILD_MONTHLY = BASE_GAME_MONTHLY & GAME_BUILD;
export type GAME_PARTY_ALL = BASE_GAME_ALL & GAME_PARTY;
export type GAME_PARTY_MONTHLY = BASE_GAME_MONTHLY & GAME_PARTY;

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

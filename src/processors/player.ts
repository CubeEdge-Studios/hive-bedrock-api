import {
    PlayerMetadata,
    PlayerMetadata_Avatar,
    PlayerMetadata_Backbling,
    PlayerRank,
} from "hive-bedrock-data";
export interface Processed_Player_Statistics
    extends Omit<
        PlayerMetadata,
        | "first_played"
        | "cosmetics.backbling"
        | "equipped_hub_title"
        | "equipped_avatar"
        | "equipped_costume"
    > {
    first_played: number | null;
    backbling_unlocked: PlayerMetadata_Backbling[];
    equipped_hub_title: string | null;
    equipped_avatar: PlayerMetadata_Avatar | null;
    equipped_costume: string | null;
}

export function process_PLAYER(
    statistics: Partial<PlayerMetadata>
): Processed_Player_Statistics | null {
    if (!statistics || Array.isArray(statistics)) return null;
    return {
        UUID: statistics.UUID!,
        xuid: statistics.xuid!,
        username: statistics.username!,
        username_cc: statistics.username_cc!,

        rank: statistics.rank ?? PlayerRank.Regular,
        first_played: statistics.first_played ?? null,

        quest_count: statistics.quest_count ?? 0,
        friend_count: statistics.friend_count ?? 0,

        daily_login_streak: statistics.daily_login_streak ?? 0,
        longest_daily_login_streak: statistics.longest_daily_login_streak ?? 0,

        avatar_count: statistics.avatar_unlocked?.length ?? 0,
        avatar_unlocked: statistics.avatar_unlocked ?? [],
        equipped_avatar: statistics.equipped_avatar ?? null,

        hub_title_count: statistics.hub_title_unlocked?.length ?? 0,
        hub_title_unlocked: statistics.hub_title_unlocked ?? [],
        equipped_hub_title: statistics.equipped_hub_title ?? null,

        costume_count: statistics.costume_unlocked?.length ?? 0,
        costume_unlocked: statistics.costume_unlocked ?? [],
        equipped_costume: statistics.equipped_costume ?? null,

        backbling_count: statistics["cosmetics.backbling"]?.length ?? 0,
        backbling_unlocked: statistics["cosmetics.backbling"] ?? [],

        hat_count: statistics.hat_unlocked?.length ?? 0,
        hat_unlocked: statistics.hat_unlocked ?? [],

        pets: statistics.pets ?? [],
        mounts: statistics.mounts ?? [],
    };
}

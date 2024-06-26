import { Game, Timeframe, calculateLevelFromXP } from "hive-bedrock-data";
import toPoint from "../helpers/toPoint";

export default function getProcessors(
    game: Game,
    timeframe: Timeframe
): ((stats: { [key: string]: any }) => void)[] {
    return [
        // Append game id
        (s) => (s.id = game),

        // Fix inconsistant bridge keys
        (s) =>
            game === Game.TheBridge && timeframe === Timeframe.Monthly
                ? Object.keys(s)
                      .filter((key) => key.startsWith("m_solo_"))
                      .forEach((key) => {
                          s[key.replace(/m_solo_/, "")] = s[key];
                          delete s[key];
                      })
                : null,

        // Calculate current level
        (s) =>
            "xp" in s && timeframe === Timeframe.AllTime
                ? (s.level = calculateLevelFromXP(s.xp, game) ?? 0)
                : null,

        // Calculate kill/death ratio
        (s) =>
            "kills" in s && "deaths" in s
                ? (s.kdr = toPoint((s.kills ?? 0) / (s.deaths ?? 0), 2))
                : null,

        // Calculate kill/death ratio - hide
        (s) =>
            "hider_kills" in s && "deaths" in s
                ? (s.kdr = toPoint((s.hider_kills ?? 0) / (s.deaths ?? 0), 2))
                : null,

        // Calculate kill/death ratio - murder
        (s) =>
            "murders" in s && "deaths" in s
                ? (s.kdr = toPoint((s.murders ?? 0) / (s.deaths ?? 0), 2))
                : null,

        // Total ratings for build
        (s) =>
            game === Game.JustBuild
                ? Object.keys(s)
                      .filter((key) => key.startsWith("rating_"))
                      .forEach((key) => (s.total_ratings = (s.total_ratings ?? 0) + s[key]))
                : null,

        // Append losses
        (s) => ("played" in s && "victories" in s ? (s.losses = s.played - s.victories) : null),

        // Calculate win percentage
        (s) =>
            "played" in s && "victories" in s
                ? (s.win_percentage = s.played > 0 ? s.victories / s.played : 0)
                : null,

        // remove empty parkour world stats
        (s) => {
            if (game === Game.ParkourWorlds && typeof s.parkours !== "object") {
                for (let key of Object.keys(s)) {
                    delete s[key];
                }
            }
            return null;
        },

        // Remove NaN
        (s) =>
            Object.entries(s).forEach(([key, value]) =>
                isNaN(value) && typeof value === "number" ? delete s[key] : null
            ),
    ];
}

export function getPlayerProcessors(): ((player: { [key: string]: any }) => void)[] {
    return [
        (p) => (p.daily_login_streak ??= 0),
        (p) => (p.longest_daily_login_streak ??= 0),
        (p) => (p.quest_count ??= 0),
        (p) => (p.friend_count ??= 0),
        (p) => (p.hub_title_unlocked ??= []),
        (p) => (p.avatar_unlocked ??= []),
        (p) => (p.costume_unlocked ??= []),
        (p) => (p.equipped_hub_title ??= null),
        (p) => (p.equipped_avatar ??= null),
        (p) => (p.equipped_costume ??= null),
    ];
}

import getMonthlyStats from "./methods/getMonthlyStats";
import getMonthlyLeaderboard from "./methods/getMonthlyLeaderboard";
import getAllTimeStats from "./methods/getAllTimeStats";
import getAllTimeLeaderboard from "./methods/getAllTimeLeaderboard";
import getGlobalStatistics from "./methods/getGlobalStatistics";
import getPlayerInfo from "./methods/getPlayerInfo";
import { AVATAR, RANK } from "./types/API";

export {
    getAllTimeStats,
    getAllTimeLeaderboard,
    getMonthlyStats,
    getMonthlyLeaderboard,
    getGlobalStatistics,
    getPlayerInfo,
    AVATAR,
    RANK,
};
export * from "./types/GAME_INFO";
export * from "./types/GAMES";

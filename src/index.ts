import getMonthlyStats from "./methods/getMonthlyStats";
import getMonthlyLeaderboard from "./methods/getMonthlyLeaderboard";
import getAllTimeStats from "./methods/getAllTimeStats";
import getAllTimeLeaderboard from "./methods/getAllTimeLeaderboard";
import getGlobalStatistics from "./methods/getGlobalStatistics";
import getPlayerInfo from "./methods/getPlayerInfo";
import getMaps from "./methods/getMaps";
import getGameMetadata from "./methods/getGameMetadata";
import { AVATAR, RANK, MAP_SEASON, MAP_VARIANT } from "./types/API";

export {
    getAllTimeStats,
    getAllTimeLeaderboard,
    getMonthlyStats,
    getMonthlyLeaderboard,
    getGlobalStatistics,
    getPlayerInfo,
    getMaps,
    getGameMetadata,
    AVATAR,
    RANK,
    MAP_SEASON,
    MAP_VARIANT,
};
export * from "./types/GAME_INFO";
export * from "./types/GAMES";

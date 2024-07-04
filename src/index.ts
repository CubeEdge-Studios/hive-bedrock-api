import getAllTimeLeaderboard from "./methods/getAllTimeLeaderboard";
import getAllTimeStatistics from "./methods/getAllTimeStatistics";
import getGlobalStatistics from "./methods/getGlobalStatistics";
import getMaps from "./methods/getMaps";
import getMetdata from "./methods/getMetadata";
import getMonthlyLeaderboard from "./methods/getMonthlyLeaderboard";
import getMonthlyStatistics from "./methods/getMonthlyStatistics";
import getPlayerInfomation from "./methods/getPlayerInfomation";
import getSeasonLeaderboard from "./methods/getSeasonLeaderboard";
import getSeasonStatistics from "./methods/getSeasonStatistics";

export {
    getAllTimeLeaderboard,
    getMonthlyLeaderboard,
    getAllTimeStatistics,
    getMonthlyStatistics,
    getGlobalStatistics,
    getMaps,
    getMetdata,
    getPlayerInfomation,
    getSeasonLeaderboard,
    getSeasonStatistics,
};
export { Game } from "hive-bedrock-data";

export type * from "./types/output";
export * from "./processors/index";

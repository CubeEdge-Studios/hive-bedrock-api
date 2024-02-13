import getAllTimeLeaderboard from "./methods/getAllTimeLeaderboard";
import getAllTimeStatistics from "./methods/getAllTimeStatistics";
import getGlobalStatistics from "./methods/getGlobalStatistics";
import getMaps from "./methods/getMaps";
import getMetdata from "./methods/getMetadata";
import getMonthlyLeaderboard from "./methods/getMonthlyLeaderboard";
import getMonthlyStatistics from "./methods/getMonthlyStatistics";
import getPlayerInfomation from "./methods/getPlayerInfomation";

export const API_SERVER = "https://api.playhive.com/v0";
export {
    getAllTimeLeaderboard,
    getMonthlyLeaderboard,
    getAllTimeStatistics,
    getMonthlyStatistics,
    getGlobalStatistics,
    getMaps,
    getMetdata,
    getPlayerInfomation,
};

export { Game } from "hive-bedrock-data";

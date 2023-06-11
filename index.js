const {
    getMonthlyStats,
    GAME,
    getAllTimeStats,
    getAllTimeLeaderboard,
    getMonthlyLeaderboard,
    getGlobalStatistics,
} = require("./lib");

async function main() {
    const { data, error } = await getMonthlyStats("jackamacc");
    console.log(data, error);
}
main();

const {
    getMonthlyStats,
    GAME,
    getAllTimeStats,
    getAllTimeLeaderboard,
    getMonthlyLeaderboard,
    getGlobalStatistics,
} = require("./lib");

async function main() {
    const { data, error } = await getAllTimeStats("e", [GAME.BlockDrop]);
    console.log(data, error);
}
main();

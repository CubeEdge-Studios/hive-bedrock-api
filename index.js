const { getStats, fetchData, getGame, getAllGames } = require("./lib/index");

getStats("ucdfiddes", "sky", "all").then((x) =>
    console.log(x.map((y) => y.data))
);

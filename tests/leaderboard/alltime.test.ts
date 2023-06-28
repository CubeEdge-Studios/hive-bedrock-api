import "../setup";
import { GAME, getAllTimeLeaderboard } from "../../src";

describe("all-time leaderboard", () => {
    test.concurrent("fetch single game", async () => {
        const { data, error } = await getAllTimeLeaderboard(GAME.BlockDrop);

        expect(data![0].id).toBe(GAME.BlockDrop);
        expect(data?.length).toBe(50);
        expect(error).toBe(null);
    });
});

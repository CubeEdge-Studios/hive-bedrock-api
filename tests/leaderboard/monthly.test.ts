import "../setup";
import { GAME, getMonthlyLeaderboard } from "../../src";

describe("monthly leaderboard", () => {
    test.concurrent("fetch single game", async () => {
        const { data, error } = await getMonthlyLeaderboard(GAME.BlockDrop);

        expect(data![0].id).toBe(GAME.BlockDrop);
        expect(data?.length).toBe(100);
        expect(error).toBe(null);
    });

    test.concurrent("fetch previous leaderboard", async () => {
        const { data, error } = await getMonthlyLeaderboard(GAME.BlockDrop, {
            year: 2023,
            month: 1,
        });

        expect(data![0].id).toBe(GAME.BlockDrop);
        expect(data?.length).toBe(100);
        expect(error).toBe(null);
    });

    test.concurrent("fetch single game with skip", async () => {
        const { data, error } = await getMonthlyLeaderboard(GAME.BlockDrop, {
            skip: 50,
            amount: 50,
        });

        expect(data![0].id).toBe(GAME.BlockDrop);
        expect(data![0].index).toBe(50);
        expect(data?.length).toBe(50);
        expect(error).toBe(null);
    });

    test.concurrent("fetch single game with date", async () => {
        const { data, error } = await getMonthlyLeaderboard(GAME.BlockDrop, {
            date: new Date(2023, 0),
        });

        expect(data![0].id).toBe(GAME.BlockDrop);
        expect(data?.length).toBe(100);
        expect(error).toBe(null);
    });
});

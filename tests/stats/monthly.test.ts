import "../setup";
import { GAME, getMonthlyStats } from "../../src";

describe("monthly statistics", () => {
    test.concurrent("fetch all games", async () => {
        const { data, error } = await getMonthlyStats("ucdfiddes");

        expect(Object.keys(data!)).toIncludeAllMembers(Object.values(GAME));
        expect(error).toBe(null);
    });

    test.concurrent("fetch single game", async () => {
        const { data, error } = await getMonthlyStats(
            "ucdfiddes",
            GAME.TreasureWars
        );

        expect(data?.id).toEqual(GAME.TreasureWars);
        expect(error).toBe(null);
    });

    test.concurrent("fetch multiple games", async () => {
        const { data, error } = await getMonthlyStats("ucdfiddes", [
            GAME.TreasureWars,
            GAME.BlockDrop,
            GAME.MurderMystery,
            GAME.HideAndSeek,
        ]);

        expect(Object.keys(data!)).toIncludeAllMembers([
            GAME.TreasureWars,
            GAME.BlockDrop,
            GAME.MurderMystery,
            GAME.HideAndSeek,
        ]);
        expect(error).toBe(null);
    });

    test.concurrent("fetch single game with month and year", async () => {
        const { data, error } = await getMonthlyStats(
            "ucdfiddes",
            GAME.TreasureWars,
            { year: 2023, month: 6 }
        );

        expect(data?.id).toEqual(GAME.TreasureWars);
        expect(error).toBe(null);
    });

    test.concurrent("fetch single game with date", async () => {
        const { data, error } = await getMonthlyStats(
            "ucdfiddes",
            GAME.TreasureWars,
            { date: new Date(2023, 5) }
        );

        expect(data?.id).toEqual(GAME.TreasureWars);
        expect(error).toBe(null);
    });
});

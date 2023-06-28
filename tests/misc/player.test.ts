import "../setup";
import { getPlayerInfo } from "../../src";

describe("player infomation", () => {
    test.concurrent("fetch player infomation", async () => {
        const { data, error } = await getPlayerInfo("ucdfiddes");

        expect(data?.username).toBe("ucdfiddes");
        expect(error).toBe(null);
    });
});

import { GAME } from "./GAME_INFO";

export type PLAYER_ALLTIME_ENDPOINT<
    G extends GAME | "all",
    ID extends string
> = `/game/all/${G}/${ID}`;

export type PLAYER_MONTHLY_ENDPOINT<
    G extends GAME | "all",
    ID extends string
> = `/game/monthly/player/${G}/${ID}`;

export type GAME_LB_ALLTIME_ENDPOINT<G extends GAME> = `/game/all/${G}`;
export type GAME_LB_MONTHLY_ENDPOINT<G extends GAME> = `/game/monthly/${G}`;

export type PLAYER_LB_SPECIFIC_MONTHLY_ENDPOINT<
    G extends GAME,
    ID extends string,
    Y extends number,
    M extends number,
    A extends number,
    S extends number
> = `/game/monthly/player/${G}/${ID}/${Y}/${M}/${A}/${S}`;

export type GAME_LB_SPECIFIC_MONTHLY_ENDPOINT<
    G extends GAME,
    Y extends number,
    M extends number,
    A extends number,
    S extends number
> = `/game/monthly/${G}/${Y}/${M}/${A}/${S}`;

export type GLOBAL_STATISTICS_ENDPOINT = `/global/statistics`;

export type ENDPOINTS<G extends GAME> =
    | PLAYER_ALLTIME_ENDPOINT<"all", string>
    | PLAYER_ALLTIME_ENDPOINT<G, string>
    | PLAYER_MONTHLY_ENDPOINT<"all", string>
    | PLAYER_MONTHLY_ENDPOINT<G, string>
    | GAME_LB_ALLTIME_ENDPOINT<G>
    | GAME_LB_MONTHLY_ENDPOINT<G>
    | PLAYER_LB_SPECIFIC_MONTHLY_ENDPOINT<
          G,
          string,
          number,
          number,
          number,
          number
      >
    | GAME_LB_SPECIFIC_MONTHLY_ENDPOINT<GAME, number, number, number, number>
    | GLOBAL_STATISTICS_ENDPOINT;

import { Game, Statistics, Timeframe } from "hive-bedrock-data";

interface APIResponse_Base {
    duration?: number;
    status: number;
}
interface APIResponse_Error {
    code: number;
    message: string;
}

export interface APIResponse_Success<T> extends APIResponse_Base {
    error: null;
    data: T;
}
export interface APIResponse_Failure extends APIResponse_Base {
    error: APIResponse_Error;
    data: null;
}
export type APIResponse<T> = APIResponse_Success<T> | APIResponse_Failure;

export interface Options {
    init: RequestInit;
}

export type OmittedSpecialStatistics<G extends Game, T extends Timeframe> = Omit<
    Statistics<G, T>,
    "first_played"
>;

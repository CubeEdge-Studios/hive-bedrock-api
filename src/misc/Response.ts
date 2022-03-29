import { AxiosResponse } from "axios";
import { APIPath } from "./fetchData";
import ResponseData from "./ResponseData";

interface ResponseType {
    hasFailed: boolean;
    status: number;
    message: string;
}
interface RatelimitsType {
    limit: number;
    remaining: number;
}

export default class Response {
    apiPath: APIPath;
    response: ResponseType;
    ratelimits: RatelimitsType;
    data: ResponseData;

    constructor(apiPath: APIPath, apiResponse: AxiosResponse) {
        this.apiPath = apiPath;

        this.response = {
            hasFailed: apiResponse.status == 200 ? false : true,
            status: apiResponse.status,
            message: apiResponse.statusText,
        };

        this.ratelimits = {
            limit: parseInt(apiResponse.headers["x-ratelimit-limit"]) | 0,
            remaining:
                parseInt(apiResponse.headers["x-ratelimit-remaining"]) | 0,
        };

        this.data = new ResponseData(this.apiPath, apiResponse.data);
    }
}

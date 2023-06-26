export type MethodResponse<R> = {
    data: R | null;
    error: {
        message: string;
        status?: number;
        endpoint?: string;
    } | null;
};

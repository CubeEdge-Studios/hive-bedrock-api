export type MethodResponse<R> = {
    data: R | null;
    error: string | null;
};

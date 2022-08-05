export interface LoginPayload {
    username: string,
    password: string
}

export interface ListResponse<T> {
    data: T[];
    count?: number;
    totalPages?: number;
    nextPage?: number | null;
    prePage?: number | null;
    [key: string]: any;
}
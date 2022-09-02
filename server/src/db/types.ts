import {QueryPage} from "../services/types";

export type DefaultQuery = {
    id?: number,
    name?: string,
    created_at?: string,
    finished_at?: string,
    page: QueryPage,
}

export type DataBaseError = {
    error: boolean,
    message: string,
}
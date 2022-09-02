import {QueryPage} from "../types";

export type DocumentBody = {
    id: number,
    name: string,
    body: string,
    created_at: string,
    finished_at: string,
};
export type DocumentQuery = {
    id?: number,
    name?: string,
    created_at?: string,
    finished_at?: string,
    page?: QueryPage,
}
export type DocumentResponse = DocumentBody[]
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {DocumentQuery, DocumentResponse} from "../../api/Documents/types";
import {fetchByQuery} from "../../api/Documents/Documents";
import {addFetcherCases} from "../builders/addFetcherCases";
import {FetcherState} from "../types";

const NAME = 'documentsResponse';
const INITIAL_STATE: FetcherState<Result> = {
    result: null,
    loading: 'idle',
    error: null,
};

export const fetchDocuments = createAsyncThunk(
    `${NAME}/fetchByQuery`,
    async (query: DocumentQuery) => {
        return await fetchByQuery(query);
    }
);

const slice = createSlice({
    name: NAME,
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        addFetcherCases<Result, DocumentResponse, DocumentQuery>(fetchDocuments, builder);
    },
})

export const documentResponse = slice.reducer;

export type Result = DocumentResponse | null;
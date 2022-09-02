import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchDocumentsCount as fetchDC} from "../../api/Documents/Documents";
import {DocumentQuery} from "../../api/Documents/types";
import {addFetcherCases} from "../builders/addFetcherCases";
import {FetcherState} from "../types";

const NAME = 'documentsCount';
const INITIAL_STATE: FetcherState<Result> = {
    result: null,
    loading: 'idle',
    error: null,
};

export const fetchDocumentsCount = createAsyncThunk(
    `${NAME}/fetchDocumentsCountCount`,
    async (query: DocumentQuery) => {
        return await fetchDC(query);
    }
);

const slice = createSlice({
    name: NAME,
    initialState: INITIAL_STATE,
    reducers: {
        setResults: (state, {payload}) => {
            state.result = payload;
        },
    },
    extraReducers: (builder) => {
        addFetcherCases<Result, number, DocumentQuery>(fetchDocumentsCount, builder);
    },
});

export const documentCountSlice = slice.reducer;
export const {setResults} = slice.actions;

export type Result = number | null;
import {createSlice} from "@reduxjs/toolkit";
import {DocumentBody} from "../../api/Documents/types";

const NAME = 'documentsList';
const INITIAL_STATE:State = {
    documents: [],
};

const slice = createSlice({
    name: NAME,
    initialState: INITIAL_STATE,
    reducers: {
        setDocuments: (state, {payload}) => {
            state.documents = payload;
        },
    },
})

export const documentsListSlice = slice.reducer;
export const {setDocuments} = slice.actions;

export type State = {
    documents: DocumentBody[]
}
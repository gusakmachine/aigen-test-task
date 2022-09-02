import {createSlice} from "@reduxjs/toolkit";
import {DocumentQuery} from "../../api/Documents/types";

const NAME = 'documentsQuery';
const INITIAL_STATE: State = {
    query: {
        page: {
            value: 1,
            size: 10,
        }
    },
};
const slice = createSlice({
    name: NAME,
    initialState: INITIAL_STATE,
    reducers: {
        setQueryBody: (state, {payload}) => {
            if (payload.id) {
                state.query = {
                    id: payload.id,
                    page: state.query.page,
                };

                return;
            }

            state.query = {
                page: state.query.page,
                ...payload,
            };
        },
        setQueryPage: (state, {payload}) => {
            state.query = {
                ...state.query,
                page: {
                    ...state.query.page,
                    ...payload,
                },
            };
        },
    },
})

export const documentsQuerySlice = slice.reducer;
export const {setQueryBody, setQueryPage} = slice.actions

export type State = {
    query: DocumentQuery,
}
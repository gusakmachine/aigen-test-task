import {ActionReducerMapBuilder, AsyncThunk, Draft, SerializedError} from "@reduxjs/toolkit";


export const addFetcherCases: ExtraReducersFetch = (fetcher, builder) => {
    builder.addCase(fetcher.pending, (state) => {
        state.result = null;
        state.error = null;
        state.loading = 'pending';
    });

    builder.addCase(fetcher.fulfilled, (state, {payload}) => {
        state.result = payload;
        state.loading = 'succeeded';
    });

    builder.addCase(fetcher.rejected, (state, action) => {
        state.error = action.payload || action.error;
        state.loading = 'failed';
    });
}

export type State<Result> = {
    result: Result | null,
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    error: SerializedError | null
}
export type ExtraReducersFetch = <Result, Response extends Draft<Result>, Query>(
    fetcher: AsyncThunk<Response, Query, {}>,
    builder: ActionReducerMapBuilder<State<Result>>
) => void;
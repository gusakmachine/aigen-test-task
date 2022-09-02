import {SerializedError} from "@reduxjs/toolkit";

export type FetcherState<Result> = {
    result: Result,
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    error:  SerializedError | null
}
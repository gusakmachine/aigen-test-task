import {useEffect, useRef} from "react";
import {isEqual} from "lodash";
import {useAppDispatch} from "../store/store";
import {AsyncThunkAction} from "@reduxjs/toolkit";

export const useQueryRequest = <Response, Query>(query: Query, action: AsyncThunkAction<Response, Query, {}>) => {
    const lastQuery = useRef<Query | undefined>(undefined);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (query) {
            if (!isEqual(query, lastQuery.current)) {
                dispatch(action);
            }

            lastQuery.current = query;
        }
    }, [query]);
}
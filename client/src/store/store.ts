import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import {documentsQuerySlice} from "./slices/documentsQuery";
import {documentResponse} from "./slices/documentsResponse";
import {documentCountSlice} from "./slices/documentsCount";
import {documentsListSlice} from "./slices/documentsList";

const rootReducer = combineReducers({
    documentsQuery: documentsQuerySlice,
    documentResponse: documentResponse,
    documentsCount: documentCountSlice,
    documentsList: documentsListSlice,
});

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
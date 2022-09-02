import {DependencyList, useCallback} from "react";

export const useAutoFinish = <FormValues>(callback: Callback<FormValues>, deps: DependencyList = [], delay: number = 500): Returned<FormValues> => {
    let timeoutId: NodeJS.Timeout;

    return useCallback((changedValues: FormValues, allValues: FormValues) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => callback(allValues), delay);
    }, deps);
}

export type Callback<FormValues> = (values: FormValues) => void;
export type Returned<FormValues> = (
    changedValues: FormValues,
    allValues: FormValues
) => void;
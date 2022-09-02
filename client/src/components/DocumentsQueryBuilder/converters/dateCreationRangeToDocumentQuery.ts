import {DateCreationRangeField} from "../types";

export const dateCreationRangeToDocumentQuery = (dateCreationRange: DateCreationRangeField) => {
    let [start, end] = dateCreationRange;
    let created_at = start._f === 'YYYY-MM-DD'? start._i : (
        start._d.toISOString().split('T')[0]
    );
    let finished_at = end._f === 'YYYY-MM-DD'? end._i : (
        end._d.toISOString().split('T')[0]
    );

    return { created_at, finished_at };
}
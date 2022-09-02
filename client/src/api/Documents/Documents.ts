import {DocumentQuery, DocumentResponse} from "./types";

export const url = 'http://localhost:8000'

export const fetchByQuery = async (query: DocumentQuery): Promise<DocumentResponse> => {
    const response = await fetch(`${url}/documents/query`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(query),
    });
    const result = await response.json();

    if (result.error) {
        throw result;
    }

    return result;
}

export const fetchDocumentsCount = async (query: DocumentQuery): Promise<number> => {
    const response = await fetch(`${url}/documents/count`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(query),
    });

    const result = await response.json();

    if (result.error) {
        throw result;
    }

    return +result.count;
}
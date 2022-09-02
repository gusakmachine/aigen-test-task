import {DocumentQuery, DocumentResponse, DocumentsCountResponse} from "./types";
import * as db from "../../db/db";
import {DataBaseError} from "../../db/types";

const tableName = 'documents';

export const getByQuery = async (query: DocumentQuery): Promise<DocumentResponse | DataBaseError> => {
    return await db.find<DocumentQuery>(tableName, query);
}

export const getCount = async (query: DocumentQuery): Promise<DocumentsCountResponse | DataBaseError> => {
    return await db.count<DocumentQuery>(tableName, query);
}
import React, {useEffect} from 'react';
import style from "./DocumentsFetcher.module.css";
import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../../store/store";
import Loading from "./Loading";
import DocumentsViewer from "../DocumentsViewer/DocumentsViewer";
import {DocumentQuery, DocumentResponse} from "../../api/Documents/types";
import {setDocuments} from "../../store/slices/documentsList";
import {useQueryRequest} from "../../hooks/useQueryRequest";
import {fetchDocuments} from "../../store/slices/documentsResponse";
import Error from "./Error";

const DocumentsFetcher = () => {
    const dispatch = useAppDispatch();
    const {query} = useSelector((state: RootState) => state.documentsQuery);
    const response = useSelector((state: RootState) => state.documentResponse);

    useQueryRequest<DocumentResponse | null, DocumentQuery>(query, fetchDocuments(query));

    useEffect(() => {
        if (response.result) {
            dispatch(setDocuments(response.result));
        }
    }, [response.result]);

    if (response.loading === 'pending') {
        return <Loading/>;
    }

    if (response.error) {
        return <Error error={response.error}/>
    }

    return (
        <div className={style.container}>
            <DocumentsViewer/>
        </div>
    );
};

export default DocumentsFetcher;
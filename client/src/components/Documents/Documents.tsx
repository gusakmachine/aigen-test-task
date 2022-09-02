import {useSelector} from "react-redux";
import {useCallback} from "react";
import style from "./Documents.module.css";
import {DocumentQuery} from "../../api/Documents/types";
import {Pagination} from "antd";
import {RootState, useAppDispatch} from "../../store/store";
import DocumentsQueryBuilder from "../DocumentsQueryBuilder/DocumentsQueryBuilder";
import DocumentsFetcher from "../DocumentsFetcher/DocumentsFetcher";
import {setQueryPage} from "../../store/slices/documentsQuery";
import DocumentsSorter from "../DocumentsSorter/DocumentsSorter";
import {useQueryRequest} from "../../hooks/useQueryRequest";
import {fetchDocumentsCount} from "../../store/slices/documentsCount";

const Documents = () => {
    const dispatch = useAppDispatch();
    const {query} = useSelector((state: RootState) => state.documentsQuery);
    const documentsCount = useSelector((state: RootState) => state.documentsCount);
    const documentsTotal = documentsCount.result || 0;

    const paginationOnChange = useCallback((page: number) => {
        if (!query.page || query.page.value !== page) {
            dispatch(setQueryPage({
                value: page,
            }));
        }
    }, [query.page]);
    const paginationOnShowSizeChange = useCallback((page: number, size: number)  => {
        dispatch(setQueryPage({
            size: size,
        }));
    }, []);

    useQueryRequest<number | null, DocumentQuery>(query, fetchDocumentsCount(query));

    return (
        <div className={style.container}>
            <div className={style.forms}>
                <DocumentsQueryBuilder />
                <DocumentsSorter fields={SORT_FIELDS}/>
            </div>
            <div className={style.results}>
                <DocumentsFetcher/>
                {(documentsTotal && query.page)?
                    <Pagination
                        defaultCurrent={query.page.value}
                        defaultPageSize={query.page.size}
                        total={documentsTotal}
                        showSizeChanger
                        onShowSizeChange={paginationOnShowSizeChange}
                        onChange={paginationOnChange}
                    />
                    : ''
                }
            </div>
        </div>
    );
};

export default Documents;
export const SORT_FIELDS = {
    id: 'Id',
    name: 'Name',
    created_at: 'Created At',
    finished_at: 'Finished At',
};
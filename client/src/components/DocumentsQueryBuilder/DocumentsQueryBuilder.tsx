import {Alert, Form, Input, Button, DatePicker} from 'antd';
import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import style from "./DocumentsQueryBuilder.module.css";
import {setQueryBody} from "../../store/slices/documentsQuery";
import {DocumentQuery} from "../../api/Documents/types";
import {RootState} from "../../store/store";
import {FormValues} from "./types";
import {dateCreationRangeToDocumentQuery} from "./converters/dateCreationRangeToDocumentQuery";
import {useAutoFinish} from "../../hooks/useAutoFinish";

const { RangePicker } = DatePicker;

const DocumentsQueryBuilder = () => {
    const dispatch = useDispatch();
    const {query} = useSelector((state: RootState) => state.documentsQuery);

    const onValuesChange = useAutoFinish<FormValues>((values: FormValues) => {
        let newQuery: DocumentQuery = {
            page: query.page,
        };

        if (values.name && values.name.length) {
            newQuery = {
                ...newQuery,
                name: values.name.toLowerCase(),
            };
        }

        if (values.dateCreationRange) {
            newQuery = {
                ...newQuery,
                ...dateCreationRangeToDocumentQuery(values.dateCreationRange),
            };
        }

        if (values.id) {
            newQuery = {
                ...newQuery,
                id: +values.id,
            };
        }

        dispatch(setQueryBody(newQuery));
    }, [query]);

    return (
        <Form
            name="search"
            className={style.container}
            onValuesChange={onValuesChange}
            autoComplete="off"
            layout='vertical'
        >
            <Alert
                className={style.alert}
                message="If the Document ID field is filled, all other fields will be ignored."
                type="warning"
            />
            <Form.Item
                label="Document ID (numeric)"
                name="id"
                rules={[
                    {pattern: new RegExp(/^[0-9]+$/), message: 'Is not a valid number.'},
                ]}
            >
                <Input type='number' />
            </Form.Item>

            <Form.Item label="Document Name" name="name">
                <Input />
            </Form.Item>

            <Form.Item label="Creation Date Range" name='dateCreationRange'>
                <RangePicker />
            </Form.Item>
        </Form>
    );
};

export default DocumentsQueryBuilder;
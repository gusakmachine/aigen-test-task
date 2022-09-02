import React from 'react';
import {Form, Select} from "antd";
import style from "./DocumentsSorter.module.css";
import {RootState, useAppDispatch} from "../../store/store";
import {createSorter} from "./utils/createSorter";
import {DocumentsSorterFC, FormValues} from "./types";
import {map} from "lodash";
import {useSelector} from "react-redux";
import {setDocuments} from "../../store/slices/documentsList";
import {useAutoFinish} from "../../hooks/useAutoFinish";

const Option = Select.Option;

const DocumentsSorter: DocumentsSorterFC = ({fields}) => {
    const dispatch = useAppDispatch();
    const documentList = useSelector((state: RootState) => state.documentsList);

    const onValuesChange = useAutoFinish<FormValues>((values: FormValues) => {
        const sorter = createSorter(values);

        if (documentList.documents) {
            console.log(sorter([...documentList.documents]));
            dispatch(setDocuments(sorter([...documentList.documents])));
        }

    }, [documentList.documents], 0);

    return (
        <Form
            name="filtration"
            className={style.container}
            onValuesChange={onValuesChange}
            autoComplete="off"
            layout='vertical'
            initialValues={{
                field: Object.keys(fields)[0],
                order: FILTRATION_ORDER.Increase,
            }}
        >
            <Form.Item label='Sort By:' name='field'>
                <Select className={style.select}>
                    {map(fields, (item, key) => (
                        <Option key={key} value={key}>{item}</Option>
                    ))}
                </Select>
            </Form.Item>

            <Form.Item label='Order:' name='order'>
                <Select className={style.select}>
                    {map(FILTRATION_ORDER, (value, name) => (
                        <Option key={value} value={value}>{name}</Option>
                    ))}
                </Select>
            </Form.Item>
        </Form>
    );
};

export default DocumentsSorter;
export const FILTRATION_ORDER = {
    'Increase': 1, 'Decrease': -1,
};
import style from "./DocumentsViewer.module.css";
import React from 'react';
import { Collapse } from 'antd';
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import Empty from "./Empty";
import {isEmpty} from "lodash";

const { Panel } = Collapse;

const DocumentsViewer = () => {
    const {documents} = useSelector((state: RootState) => state.documentsList);

    if (isEmpty(documents)) {
        return < Empty/>
    }

    return (
        <div className={style.container}>
            <Collapse>
                {documents.map((item, index) => (
                    <Panel header={item.name} key={index}>
                        <p>{`Document Id: ${item.id}`}</p>
                        <p>{`Document Name: ${item.name}`}</p>
                        <p>{`Document Body: ${item.body}`}</p>
                        <p>{`Document Start Date: ${item.created_at}`}</p>
                        <p>{`Document End Date: ${item.finished_at}`}</p>
                    </Panel>
                ))}
            </Collapse>
        </div>
    );
};

export default DocumentsViewer;
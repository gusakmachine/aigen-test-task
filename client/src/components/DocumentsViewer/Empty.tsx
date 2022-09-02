import React from 'react';
import style from "./DocumentsViewer.module.css";
import {Empty as AntdEmpty} from "antd";

const Empty = () => {
    return (
        <div className={style.container}>
            <AntdEmpty/>
        </div>
    );
};

export default Empty;
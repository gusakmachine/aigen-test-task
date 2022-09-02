import React from 'react';
import style from "./DocumentsFetcher.module.css"
import {Spin} from "antd";
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Loading = () => {
    return (
        <div className={style.container}>
            <Spin indicator={antIcon} />
        </div>
    );
};

export default Loading;
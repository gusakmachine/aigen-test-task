import style from "./DocumentsFetcher.module.css";
import {SerializedError} from "@reduxjs/toolkit";

const Error: ErrorFC = ({error}) => {
    return (
        <div className={style.container}>
           <h1>{error.name || 'Error'}</h1>
           <p>{error.message}</p>
        </div>
    );
};

export default Error;
export type ErrorProps = { error: SerializedError };
export type ErrorFC = (props: ErrorProps) => JSX.Element;

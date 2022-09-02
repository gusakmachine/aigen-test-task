import {Application} from "express";
import {DocumentsRouter} from "./DocumentsRouter";

export const Router = (app: Application) => {
    DocumentsRouter(app);
};
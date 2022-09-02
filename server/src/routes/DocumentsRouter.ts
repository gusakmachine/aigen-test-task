import {Application} from "express";
import * as DocumentsController from "../controllers/DocumentsController";

export const DocumentsRouter = (app: Application) => {
    app.post('/documents/query', DocumentsController.query);
    app.post('/documents/count', DocumentsController.count);
}
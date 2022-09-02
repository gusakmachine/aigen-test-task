import {Request, Response} from "express";
import * as DocumentService from "../services/DocumentService/DocumentService";


export const query = async (req: Request, res: Response) => {
    const query = req.body;
    const result = await DocumentService.getByQuery(query);

    res.json(result);
}

export const count = async (req: Request, res: Response) => {
    const query = req.body;
    const result = await DocumentService.getCount(query);

    res.json(result);
}
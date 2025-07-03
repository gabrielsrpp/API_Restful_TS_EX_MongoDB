import { Request, Response } from "express";

// model

import { MovieModel } from "../models/Movie";

// logger
import Logger from "../../config/logger";

export async function createMovie(req: Request, res: Response) {
    try {
        const data = req.body
        const movie = await MovieModel.create(data)
        res.status(201).json(movie)
    } catch (e: any) {
        Logger.error(`Erro no sistema: ${e.message}`);
    }
}

import { Request, Response } from "express";

// model

import { MovieModel } from "../models/Movie";

// logger
import Logger from "../../config/logger";

export async function createMovie(req: Request, res: Response) {
    res.status(200).send("Deu certo o controller !");
}

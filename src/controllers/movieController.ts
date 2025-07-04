import { Request, Response } from "express";

// model

import { MovieModel } from "../models/Movie";

// logger
import Logger from "../../config/logger";
import { json } from "stream/consumers";

export async function createMovie(req: Request, res: Response) {
    try {
        const data = req.body
        const movie = await MovieModel.create(data)
        res.status(201).json(movie)
    } catch (e: any) {
        Logger.error(`Erro no sistema: ${e.message}`);
        res.status(500).json({error: "Por favor tente mais tarde"})
    }
}


export async function findMovieById(req: Request, res: Response) {
    try {
        const id = req.params.id
        const movie = await MovieModel.findById(id)

        if(!movie) {
            res.status(404).json({error: "O filme não existe."})
        }

        res.status(200).json(movie);


    } catch (e: any) {
        Logger.error(`Erro no sistema: ${e.message}`);
        res.status(500).json({error: "Por favor tente mais tarde"})
        
    }
}

export async function getAllMovies(req: Request, res: Response) {
    try {
        const movies = await MovieModel.find()
        res.status(200).json(movies);
    } catch (e: any) {
        Logger.error(`Erro no sistema: ${e.message}`);
    }
}

export async function removeMovie(req: Request, res: Response) {

    try {

        const id = req.params.id
        const movie =  MovieModel.findById(id)

        if(!movie) {
            res.status(404).json({error: "O filme não existe"})
        }

        movie.deleteOne();
        res.status(200).json({ msg: "Filme removido com sucesso" });


    } catch (e: any) {
        Logger.error(`Erro no sistema: ${e.message}`);
        res.status(500).json({error: "Por favor tentge mais tarde"})
    }
}

export async function updateMovie(req: Request, res:Response) {
    try {

        const id = req.params.id
        const data = req.body

        const movie = await MovieModel.findById(id);

        if(!movie) {
            res.status(404).json({error: "O filme não existe"})
        }

        await MovieModel.findByIdAndUpdate;
        await MovieModel.updateOne({_id: id}, data);
        res.status(200).json({data});

    } catch (e: any) {
        Logger.error(`Erro no sistema: ${e.message}`);
        res.status(500).json({error: "Por favor tentge mais tarde"})
    }
}
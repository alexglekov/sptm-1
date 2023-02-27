import { Request, Response } from "express";
import { Book } from "../models/book";
import { postBook } from "../workers/book.worker";

export const getBoks = async (req: Request, res: Response) => {
    try{
        const books = await Book.find({})
        res.status(200).json(books)
    } catch {
        res.status(404).json({
            message: 'Error while fetching books',
        })
    }
}

export const createBook = async (req: Request, res: Response) => {
    try{
        await postBook(req.body);
        res.status(200).send('Book added to the queue');
    } catch {
        res.status(500).json({
            message: 'Error while posting the book',
        })
    }
}
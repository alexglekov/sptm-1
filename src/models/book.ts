import mongoose from "mongoose"

interface Book {
    title: string
    description: string
    author: string
    year: number
}

const BookSchema = new mongoose.Schema<Book>({
    title: String,
    description: String,
    author: String,
    year: Number
})
  
export const Book = mongoose.model<Book>('Book', BookSchema)
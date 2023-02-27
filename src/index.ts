import express from 'express'
import mongoose from 'mongoose'

import * as BooksController from './controllers/BooksController'

mongoose.connect('mongodb+srv://admin:admin@cluster0.udpxy6u.mongodb.net/books?retryWrites=true&w=majority')
    .then(() => {
        console.log('DB - OK');
    })
    .catch(() => {
        console.log('DB - error');
    })

const PORT = 3000
const app = express()

app.use(express.json())

app.get('/', BooksController.getBoks)
app.post('/', BooksController.createBook)

app.listen(PORT, () => {
    console.log('Server has been started');
}).on('error', () => console.log('Error!'));
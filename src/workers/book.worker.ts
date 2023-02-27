import { Worker, type Job } from 'bullmq'
import { Book } from '../models/book'
import { bookQueue } from '../queues/book.queue'

const bookWorker = new Worker(bookQueue.name, async (job: Job) => {
  const data = job.data

  const book = new Book({
    title: data.title,
    description: data.description,
    author: data.author,
    year: data.year
  })

  await book.save()
})

bookWorker.on('completed', () => {
    console.log('Done!')
})

export const postBook = async (data: any) => {
  await bookQueue.add('post', data, {removeOnComplete: true, removeOnFail: true});
}
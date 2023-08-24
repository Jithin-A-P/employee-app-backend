import { Repository } from 'typeorm'
import Book from '../entity/book.entity'

class BookRepository {
  constructor(private bookRepository: Repository<Book>) {}

  public findAll = (
    skip: number,
    take: number,
    filter: any
  ): Promise<[Book[], number]> => {
    return this.bookRepository.findAndCount({
      skip: skip,
      take: take,
      where: filter,
    })
  }

  public findById = (id: string, getRelations: boolean): Promise<Book> => {
    return this.bookRepository.findOne({
      relations: {
        bookShelfJns: getRelations && {
          shelf: getRelations,
        },
        borrowedBooks: getRelations && {
          employee: getRelations,
        }
      },
      where: { id: id },
    })
  }

  public findByISBN = (
    isbn: string,
    getShlefDetails: boolean
  ): Promise<Book> => {
    return this.bookRepository.findOne({
      where: { isbn: isbn },
      relations: {
        bookShelfJns: getShlefDetails && {
          shelf: getShlefDetails,
        },
      },
    })
  }

  public addBook = (book: Book): Promise<Book> => {
    return this.bookRepository.save(book)
  }

  public addBooks = (books: Book[]): Promise<Book[]> => {
    return this.bookRepository.save(books)
  }

  public updateBook = (book: Book): Promise<Book> => {
    return this.bookRepository.save(book)
  }

  public removeBook = (book: Book): Promise<Book> => {
    return this.bookRepository.softRemove(book)
  }
}

export default BookRepository

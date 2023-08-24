import { Column, Entity, OneToMany } from 'typeorm'
import AbstractEntity from './absract.entity'
import BookShelfJn from './book-shelf-jn.entity'
import BorrowedBook from './borrowed-book.entity'
import Subscription from './subscription.entity'
import BookCategory from '../utils/book-category.enum'

@Entity()
class Book extends AbstractEntity {
  @Column({ unique: true })
  isbn: string

  @Column()
  title: string

  @Column()
  author: string

  @Column()
  category: BookCategory

  @Column({ nullable: true })
  description?: string

  @Column({ nullable: true })
  publisher?: string

  @Column({ nullable: true })
  releaseDate?: string

  @Column({ nullable: true })
  thumbnailUrl?: string

  @Column()
  totalCount: number

  @Column()
  availableCount: number

  @OneToMany(() => BookShelfJn, (bookShelfJn) => bookShelfJn.book)
  bookShelfJns?: BookShelfJn[]

  @OneToMany(() => BorrowedBook, (borrowedBook) => borrowedBook.book)
  borrowedBooks?: BorrowedBook[]

  @OneToMany(() => Subscription, (subscription) => subscription.subscribeTo)
  subscriptions?: Subscription[]

  shelves?: any[]

  borrowedBy?: any[]
}

export default Book

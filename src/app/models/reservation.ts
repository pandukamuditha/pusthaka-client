import { Book } from './book';

export class Reservation {
  _id: string;
  book: string | Book;
  user: string;
  date: Date;
}

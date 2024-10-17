export class CartDto {
    userId: string;
    books: { bookId: string; quantity: number }[];
}
export class CartUpdateDto {
    books: { bookId: string; quantity: number }[];
}
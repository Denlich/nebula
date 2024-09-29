import { Injectable } from '@nestjs/common';
import { Prisma, Book } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class BookRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: Prisma.BookUncheckedCreateInput): Promise<Book> {
    return this.prismaService.book.create({ data });
  }

  async findAll(): Promise<Book[]> {
    return this.prismaService.book.findMany();
  }

  async find(where: Prisma.BookWhereInput): Promise<Book> {
    return this.prismaService.book.findFirst({ where });
  }

  async findById(id: string): Promise<Book> {
    return this.prismaService.book.findFirst({ where: { id } });
  }

  async update(
    id: string,
    data: Prisma.BookUncheckedUpdateInput,
  ): Promise<Book> {
    return this.prismaService.book.update({ where: { id }, data });
  }

  async delete(id: string): Promise<Book> {
    return this.prismaService.book.delete({ where: { id } });
  }
}

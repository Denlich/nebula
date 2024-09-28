import { Injectable } from '@nestjs/common';
import { Prisma, Author } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class AuthorRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: Prisma.AuthorUncheckedCreateInput): Promise<Author> {
    return this.prismaService.author.create({ data });
  }

  async findAll(): Promise<Author[]> {
    return this.prismaService.author.findMany();
  }

  async find(where: Prisma.AuthorWhereInput): Promise<Author> {
    return this.prismaService.author.findFirst({ where });
  }

  async findById(id: string): Promise<Author> {
    return this.prismaService.author.findFirst({ where: { id } });
  }

  async update(
    id: string,
    data: Prisma.AuthorUncheckedUpdateInput,
  ): Promise<Author> {
    return this.prismaService.author.update({ where: { id }, data });
  }

  async delete(id: string): Promise<Author> {
    return this.prismaService.author.delete({ where: { id } });
  }
}

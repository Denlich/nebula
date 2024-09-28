import { Injectable } from '@nestjs/common';
import { Prisma, Author } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class AuthorRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: Prisma.AuthorUncheckedCreateInput): Promise<Author> {
    return this.prismaService.author.create({ data });
  }

  async find(where: Prisma.AuthorWhereInput): Promise<Author> {
    return this.prismaService.author.findFirst({ where });
  }

  findById(id: string): Promise<Author> {
    return this.prismaService.author.findFirst({ where: { id } });
  }
}

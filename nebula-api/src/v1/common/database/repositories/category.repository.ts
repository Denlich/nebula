import { Injectable } from '@nestjs/common';
import { Prisma, Category } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CategoryRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: Prisma.CategoryUncheckedCreateInput): Promise<Category> {
    return this.prismaService.category.create({ data });
  }

  async findAll(): Promise<Category[]> {
    return this.prismaService.category.findMany();
  }

  async find(where: Prisma.CategoryWhereInput): Promise<Category> {
    return this.prismaService.category.findFirst({ where });
  }

  async findById(id: string): Promise<Category> {
    return this.prismaService.category.findFirst({ where: { id } });
  }

  async update(
    id: string,
    data: Prisma.CategoryUncheckedUpdateInput,
  ): Promise<Category> {
    return this.prismaService.category.update({ where: { id }, data });
  }

  async delete(id: string): Promise<Category> {
    return this.prismaService.category.delete({ where: { id } });
  }
}

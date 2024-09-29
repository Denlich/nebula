import { Injectable } from '@nestjs/common';
import { Prisma, Publisher } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PublisherRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: Prisma.PublisherUncheckedCreateInput): Promise<Publisher> {
    return this.prismaService.publisher.create({ data });
  }

  async findAll(): Promise<Publisher[]> {
    return this.prismaService.publisher.findMany();
  }

  async find(where: Prisma.PublisherWhereInput): Promise<Publisher> {
    return this.prismaService.publisher.findFirst({ where });
  }

  async findById(id: string): Promise<Publisher> {
    return this.prismaService.publisher.findFirst({ where: { id } });
  }

  async update(
    id: string,
    data: Prisma.PublisherUncheckedUpdateInput,
  ): Promise<Publisher> {
    return this.prismaService.publisher.update({ where: { id }, data });
  }

  async delete(id: string): Promise<Publisher> {
    return this.prismaService.publisher.delete({ where: { id } });
  }
}

import { Injectable } from '@nestjs/common';
import { Prisma, Cart } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CartRepository {
    constructor(private readonly prismaService: PrismaService) {}

    async create(data: Prisma.CartUncheckedCreateInput): Promise<Cart> {
        return this.prismaService.cart.create({ data });
    }

    async findAll(): Promise<Cart[]> {
        return this.prismaService.cart.findMany();
    }

    async find(where: Prisma.CartWhereInput): Promise<Cart> {
        return this.prismaService.cart.findFirst({ where });
    }

    async findById(id: string): Promise<Cart> {
        return this.prismaService.cart.findFirst({ where: { id } });
    }

    async update(id: string, data: Prisma.CartUncheckedUpdateInput): Promise<Cart> {
        return this.prismaService.cart.update({ where: { id }, data });
    }

    async delete(id: string): Promise<Cart> {
        return this.prismaService.cart.delete({ where: { id } });
    }
}
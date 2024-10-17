import { Injectable } from '@nestjs/common';
import { CartRepository } from '../common/database';
import { CartDto, CartUpdateDto } from './dtos';

@Injectable()
export class CartService {
    constructor(private readonly cartRepository: CartRepository) {}

    async create(cartDto: CartDto) {
        return this.cartRepository.create(cartDto);
    }

    async findAll() {
        return this.cartRepository.findAll();
    }

    async findOne(id: string) {
        return this.cartRepository.findById(id);
    }

    async update(id: string, cartUpdateDto: CartUpdateDto) {
        return this.cartRepository.update(id, cartUpdateDto);
    }

    async remove(id: string) {
        return this.cartRepository.delete(id);
    }
}
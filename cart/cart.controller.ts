import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartDto, CartUpdateDto } from './dtos';

@Controller('cart')
export class CartController {
    constructor(private readonly cartService: CartService) {}

    @Post()
    create(@Body() createCartDto: CartDto) {
        return this.cartService.create(createCartDto);
    }

    @Get()
    findAll() {
        return this.cartService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.cartService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCartDto: CartUpdateDto) {
        return this.cartService.update(id, updateCartDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.cartService.remove(id);
    }
}
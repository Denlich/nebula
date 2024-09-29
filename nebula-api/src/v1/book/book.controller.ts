import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';

import { Roles } from '../common/decorators';
import { JwtAuthGuard } from '../common/security';
import { RoleGuard } from '../common/security/guards';

import { BookDto } from './dtos';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async findAll() {
    return this.bookService.findAll();
  }

  @Get('/:id')
  async findById(id: string) {
    return this.bookService.findById(id);
  }

  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Post()
  async create(@Body() body: BookDto) {
    return this.bookService.create(body);
  }

  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Patch('/:id')
  async update(id: string, @Body() body: BookDto) {
    return this.bookService.update(id, body);
  }

  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Delete('/:id')
  async delete(id: string) {
    return this.bookService.delete(id);
  }
}

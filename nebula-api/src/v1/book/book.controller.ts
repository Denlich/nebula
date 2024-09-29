import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

import { JwtAuthGuard } from '../common/security';
import { RoleGuard } from '../common/security/guards';
import { ApiEndpoint } from '../common/utils/documentation';

import { BookService } from './book.service';
import { BookDto, BookUpdateDto } from './dtos';

@ApiTags('book')
@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @ApiOkResponse({
    description: 'Return all books',
    type: [BookDto],
  })
  @ApiEndpoint({
    summary: 'Get all books',
  })
  @Get()
  async findAll() {
    return this.bookService.findAll();
  }

  @ApiOkResponse({
    description: 'Return book by id',
    type: BookDto,
  })
  @ApiEndpoint({
    summary: 'Get book by id',
  })
  @Get(':id')
  async findById(id: string) {
    return this.bookService.findById(id);
  }

  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'Create new book',
    type: BookDto,
  })
  @ApiBody({
    type: BookDto,
  })
  @ApiEndpoint({
    summary: 'Create new book',
    guards: [JwtAuthGuard, RoleGuard],
    roles: ['ADMIN'],
  })
  @Post()
  async create(@Body() body: BookDto) {
    return this.bookService.create(body);
  }

  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'Update the book',
    type: BookUpdateDto,
  })
  @ApiBody({
    type: BookUpdateDto,
  })
  @ApiEndpoint({
    summary: 'Update the book',
    guards: [JwtAuthGuard, RoleGuard],
    roles: ['ADMIN'],
  })
  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: BookUpdateDto) {
    return this.bookService.update(id, body);
  }

  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'Delete the book',
  })
  @ApiEndpoint({
    summary: 'Delete the book',
    guards: [JwtAuthGuard, RoleGuard],
    roles: ['ADMIN'],
  })
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.bookService.delete(id);
  }
}

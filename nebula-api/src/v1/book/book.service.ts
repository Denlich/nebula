import { Injectable } from '@nestjs/common';

import { BookRepository } from '../common/database/repositories';
import { BookDto } from './dtos';

@Injectable()
export class BookService {
  constructor(private readonly bookRepository: BookRepository) {}

  async findAll() {
    return this.bookRepository.findAll();
  }

  async findById(id: string) {
    return this.bookRepository.findById(id);
  }

  async create(bookDto: BookDto) {
    return this.bookRepository.create(bookDto);
  }

  async update(id: string, bookDto: BookDto) {
    return this.bookRepository.update(id, bookDto);
  }

  async delete(id: string) {
    return this.bookRepository.delete(id);
  }
}

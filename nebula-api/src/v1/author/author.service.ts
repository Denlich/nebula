import { Injectable } from '@nestjs/common';
import { AuthorRepository } from '../common/database/repositories';
import { AuthorDto, AuthorUpdateDto } from './dtos';

@Injectable()
export class AuthorService {
  constructor(private readonly authorRepository: AuthorRepository) {}

  async getAllAuthors() {
    return await this.authorRepository.findAll();
  }

  async getAuthor(id: string) {
    return await this.authorRepository.findById(id);
  }

  async createAuthor(authorDto: AuthorDto) {
    return await this.authorRepository.create(authorDto);
  }

  async updateAuthor(id: string, authorDto: AuthorUpdateDto) {
    return await this.authorRepository.update(id, authorDto);
  }

  async deleteAuthor(id: string) {
    return await this.authorRepository.delete(id);
  }
}

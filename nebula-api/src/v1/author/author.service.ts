import { Injectable } from '@nestjs/common';
import { AuthorRepository } from '../common/database/repositories';
import { AuthorDto } from './dtos';

@Injectable()
export class AuthorService {
  constructor(private readonly authorRepository: AuthorRepository) {}

  async createAuthor(authorDto: AuthorDto) {
    return await this.authorRepository.create(authorDto);
  }
}

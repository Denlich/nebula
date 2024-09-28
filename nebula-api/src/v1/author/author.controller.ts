import { Body, Controller, Post, UseGuards } from '@nestjs/common';

import { JwtAuthGuard } from '../common/security';

import { AuthorDto } from './dtos';
import { AuthorService } from './author.service';
import { Roles } from '../common/decorators';
import { RoleGuard } from '../common/security/guards';

@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Post()
  async createAuthor(@Body() body: AuthorDto) {
    return await this.authorService.createAuthor(body);
  }
}

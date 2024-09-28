import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';

import { Roles } from '../common/decorators';
import { JwtAuthGuard } from '../common/security';
import { RoleGuard } from '../common/security/guards';

import { AuthorDto, AuthorUpdateDto } from './dtos';
import { AuthorService } from './author.service';

@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllAuthors() {
    return await this.authorService.getAllAuthors();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  async getAuthor(@Param('id') id: string) {
    return await this.authorService.getAuthor(id);
  }

  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Post()
  async createAuthor(@Body() body: AuthorDto) {
    return await this.authorService.createAuthor(body);
  }

  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Patch('/:id')
  async updateAuthor(@Param('id') id: string, @Body() body: AuthorUpdateDto) {
    return await this.authorService.updateAuthor(id, body);
  }

  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Delete('/:id')
  async deleteAuthor(@Param('id') id: string) {
    return await this.authorService.deleteAuthor(id);
  }
}

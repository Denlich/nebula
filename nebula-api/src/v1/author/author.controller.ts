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

import { ApiEndpoint } from '../common/utils/documentation';
import { JwtAuthGuard } from '../common/security';
import { RoleGuard } from '../common/security/guards';

import { AuthorDto, AuthorUpdateDto } from './dtos';
import { AuthorService } from './author.service';

@ApiTags('author')
@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @ApiOkResponse({
    description: 'Get all authors',
    type: [AuthorDto],
  })
  @ApiEndpoint({
    summary: 'Get all authors',
  })
  @Get()
  async getAllAuthors() {
    return await this.authorService.getAllAuthors();
  }

  @ApiOkResponse({
    description: 'Get author by id',
    type: AuthorDto,
  })
  @ApiEndpoint({
    summary: 'Get author by id',
  })
  @Get(':id')
  async getAuthor(@Param('id') id: string) {
    return await this.authorService.getAuthor(id);
  }

  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'Create new author',
    type: AuthorDto,
  })
  @ApiBody({
    type: AuthorDto,
  })
  @ApiEndpoint({
    summary: 'Create new author',
    guards: [JwtAuthGuard, RoleGuard],
    roles: ['ADMIN'],
  })
  @Post()
  async createAuthor(@Body() body: AuthorDto) {
    return await this.authorService.createAuthor(body);
  }

  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'Update the author',
    type: AuthorDto,
  })
  @ApiBody({
    type: AuthorUpdateDto,
  })
  @ApiEndpoint({
    summary: 'Update the author',
    guards: [JwtAuthGuard, RoleGuard],
    roles: ['ADMIN'],
  })
  @Patch(':id')
  async updateAuthor(@Param('id') id: string, @Body() body: AuthorUpdateDto) {
    return await this.authorService.updateAuthor(id, body);
  }

  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'Delete the author',
  })
  @ApiEndpoint({
    summary: 'Delete the author',
    guards: [JwtAuthGuard, RoleGuard],
    roles: ['ADMIN'],
  })
  @Delete(':id')
  async deleteAuthor(@Param('id') id: string) {
    return await this.authorService.deleteAuthor(id);
  }
}

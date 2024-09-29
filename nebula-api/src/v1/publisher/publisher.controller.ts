import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import {
  ApiBearerAuth,
  ApiBody,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

import { JwtAuthGuard, RoleGuard } from '../common/security/guards';
import { ApiEndpoint } from '../common/utils/documentation';

import { PublisherDto, PublisherUpdateDto } from './dtos';
import { PublisherService } from './publisher.service';

@ApiTags('publisher')
@Controller('publisher')
export class PublisherController {
  constructor(private readonly publisherService: PublisherService) {}

  @ApiOkResponse({
    description: 'Return all publishers',
    type: [PublisherDto],
  })
  @ApiEndpoint({
    summary: 'Get all publishers',
  })
  @Get()
  async getAllPublishers() {
    return await this.publisherService.getAllPublishers();
  }

  @ApiOkResponse({
    description: 'Return publisher by id',
    type: PublisherDto,
  })
  @ApiEndpoint({
    summary: 'Get publisher by id',
  })
  @Get(':id')
  async getPublisher(@Param('id') id: string) {
    return await this.publisherService.getPublisher(id);
  }

  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'Create new publisher',
    type: PublisherDto,
  })
  @ApiBody({
    type: PublisherDto,
  })
  @ApiEndpoint({
    summary: 'Create new publisher',
    guards: [JwtAuthGuard, RoleGuard],
    roles: ['ADMIN'],
  })
  @Post()
  async createPublisher(@Body() body: PublisherDto) {
    return await this.publisherService.createPublisher(body);
  }

  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'Update the publisher',
    type: PublisherDto,
  })
  @ApiBody({
    type: PublisherUpdateDto,
  })
  @ApiEndpoint({
    summary: 'Update the publisher',
    guards: [JwtAuthGuard, RoleGuard],
    roles: ['ADMIN'],
  })
  @Post(':id')
  async updatePublisher(
    @Param('id') id: string,
    @Body() body: PublisherUpdateDto,
  ) {
    return await this.publisherService.updatePublisher(id, body);
  }

  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'Delete the publisher',
  })
  @ApiEndpoint({
    summary: 'Delete the publisher',
    guards: [JwtAuthGuard, RoleGuard],
    roles: ['ADMIN'],
  })
  @Delete(':id')
  async deletePublisher(@Param('id') id: string) {
    return await this.publisherService.deletePublisher(id);
  }
}

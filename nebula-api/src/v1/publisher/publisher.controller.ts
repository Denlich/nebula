import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';

import { Roles } from '../common/decorators';
import { JwtAuthGuard, RoleGuard } from '../common/security/guards';

import { PublisherDto } from './dtos';
import { PublisherService } from './publisher.service';

@Controller('publisher')
export class PublisherController {
  constructor(private readonly publisherService: PublisherService) {}

  @Get()
  async getAllPublishers() {
    return await this.publisherService.getAllPublishers();
  }

  @Get('/:id')
  async getPublisher(@Param('id') id: string) {
    return await this.publisherService.getPublisher(id);
  }

  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Post()
  async createPublisher(@Body() body: PublisherDto) {
    return await this.publisherService.createPublisher(body);
  }

  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Post('/:id')
  async updatePublisher(@Param('id') id: string, @Body() body: PublisherDto) {
    return await this.publisherService.updatePublisher(id, body);
  }

  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Delete('/:id')
  async deletePublisher(@Param('id') id: string) {
    return await this.publisherService.deletePublisher(id);
  }
}

import { Injectable } from '@nestjs/common';

import { PublisherRepository } from '../common/database/repositories';

import { PublisherDto, PublisherUpdateDto } from './dtos';

@Injectable()
export class PublisherService {
  constructor(private readonly publisherRepository: PublisherRepository) {}

  async getAllPublishers() {
    return await this.publisherRepository.findAll();
  }

  async getPublisher(id: string) {
    return await this.publisherRepository.findById(id);
  }

  async createPublisher(publisherDto: PublisherDto) {
    return await this.publisherRepository.create(publisherDto);
  }

  async updatePublisher(id: string, updatePublisherDto: PublisherUpdateDto) {
    return await this.publisherRepository.update(id, updatePublisherDto);
  }

  async deletePublisher(id: string) {
    return await this.publisherRepository.delete(id);
  }
}

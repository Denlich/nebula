import { Injectable } from '@nestjs/common';

import { CategoryRepository } from '../common/database';

import { CategoryDto, CategoryUpdateDto } from './dtos';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async create(createCategoryDto: CategoryDto) {
    return this.categoryRepository.create(createCategoryDto);
  }

  async findAll() {
    return this.categoryRepository.findAll();
  }

  async findOne(id: string) {
    return this.categoryRepository.findById(id);
  }

  async update(id: string, updateCategoryDto: CategoryUpdateDto) {
    return this.categoryRepository.update(id, updateCategoryDto);
  }

  async remove(id: string) {
    return this.categoryRepository.delete(id);
  }
}

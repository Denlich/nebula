import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ApiEndpoint } from '../common/utils/documentation';
import { JwtAuthGuard, RoleGuard } from '../common/security/guards';

import { CategoryDto, CategoryUpdateDto } from './dtos';
import { CategoryService } from './category.service';

@ApiTags('category')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @ApiOkResponse({
    description: 'Get all categories',
    type: [CategoryDto],
  })
  @ApiEndpoint({
    summary: 'Get all categories',
  })
  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @ApiOkResponse({
    description: 'Get category by id',
    type: CategoryDto,
  })
  @ApiEndpoint({
    summary: 'Get category by id',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(id);
  }

  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'Create new category',
    type: CategoryDto,
  })
  @ApiEndpoint({
    summary: 'Create new category',
    guards: [JwtAuthGuard, RoleGuard],
    roles: ['ADMIN'],
  })
  @Post()
  create(@Body() createCategoryDto: CategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'Create new category',
    type: CategoryDto,
  })
  @ApiEndpoint({
    summary: 'Create new category',
    guards: [JwtAuthGuard, RoleGuard],
    roles: ['ADMIN'],
  })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: CategoryUpdateDto,
  ) {
    return this.categoryService.update(id, updateCategoryDto);
  }

  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'Create new category',
    type: CategoryDto,
  })
  @ApiEndpoint({
    summary: 'Create new category',
    guards: [JwtAuthGuard, RoleGuard],
    roles: ['ADMIN'],
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(id);
  }
}

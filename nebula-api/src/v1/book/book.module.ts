import { Module } from '@nestjs/common';

import { DatabaseModule } from '../common/database';
import { SecurityModule } from '../common/security';

import { BookController } from './book.controller';
import { BookService } from './book.service';

import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';

@Module({
  imports: [DatabaseModule, SecurityModule],
  controllers: [BookController, CategoryController],
  providers: [BookService, CategoryService],
})
export class BookModule {}

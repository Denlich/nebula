import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import {
  AuthorRepository,
  UserRepository,
  PublisherRepository,
  BookRepository,
  CategoryRepository,
} from './repositories';

@Module({
  providers: [
    PrismaService,
    UserRepository,
    AuthorRepository,
    PublisherRepository,
    BookRepository,
    CategoryRepository,
  ],
  exports: [
    PrismaService,
    UserRepository,
    AuthorRepository,
    PublisherRepository,
    BookRepository,
    CategoryRepository,
  ],
})
export class DatabaseModule {}

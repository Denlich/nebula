import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { AuthorRepository, UserRepository } from './repositories';

@Module({
  providers: [PrismaService, UserRepository, AuthorRepository],
  exports: [PrismaService, UserRepository, AuthorRepository],
})
export class DatabaseModule {}

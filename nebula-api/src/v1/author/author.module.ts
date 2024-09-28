import { Module } from '@nestjs/common';

import { DatabaseModule } from '../common/database';
import { SecurityModule } from '../common/security';
import { RoleGuard } from '../common/security/guards';

import { AuthorController } from './author.controller';
import { AuthorService } from './author.service';

@Module({
  imports: [DatabaseModule, SecurityModule],
  controllers: [AuthorController],
  providers: [AuthorService, RoleGuard],
})
export class AuthorModule {}

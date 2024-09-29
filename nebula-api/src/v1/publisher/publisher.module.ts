import { Module } from '@nestjs/common';

import { DatabaseModule } from '../common/database';
import { SecurityModule } from '../common/security';

import { PublisherController } from './publisher.controller';
import { PublisherService } from './publisher.service';

@Module({
  imports: [DatabaseModule, SecurityModule],
  controllers: [PublisherController],
  providers: [PublisherService],
})
export class PublisherModule {}

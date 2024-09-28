import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { JwtStrategy, LocalStrategy, SecurityModule } from '../common/security';
import { DatabaseModule } from '../common/database';
import { UserModule } from '../user/user.module';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [PassportModule, DatabaseModule, SecurityModule, UserModule],
  controllers: [AuthController],
  exports: [AuthService],
  providers: [AuthService, JwtStrategy, LocalStrategy],
})
export class AuthModule {}

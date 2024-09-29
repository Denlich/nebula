import { applyDecorators, UseGuards } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard, RoleGuard } from '../../security/guards';
import { Roles } from '../../decorators';

export class ApiEndpointParams {
  summary: string;
  roles?: string[];
  guards?: any | any[];
}

export function ApiEndpoint({ summary, roles, guards }: ApiEndpointParams) {
  let description = '';

  if (roles)
    description += `<b>Roles: ${typeof roles === 'string' ? roles : roles.join(', ')}</b><br>`;
  if (guards) {
    description += `<b>Guards: ${typeof guards === 'function' ? guards.name : guards.map((g) => g.name).join(', ')}</b>`;
    guards = typeof guards === 'function' ? [guards] : guards;
  }

  const decorators = [ApiOperation({ summary, description })];

  if (roles) {
    decorators.push(Roles(...roles), UseGuards(JwtAuthGuard, RoleGuard));
  }

  if (guards) {
    decorators.push(UseGuards(...guards));
  }

  return applyDecorators(...decorators);
}

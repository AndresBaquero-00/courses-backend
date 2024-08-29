import { Controller, Get, UseGuards } from '@nestjs/common';

import { JwtAuthGuard } from 'src/auth/guards';
import { RolesGuard } from './guards';
import { RolesService } from './roles.service';
import { HasRoleDecorator } from './decorators';
import { RolesEnum } from './enums';

@Controller('roles')
@UseGuards(JwtAuthGuard, RolesGuard)
export class RolesController {
  public constructor(private readonly rolesService: RolesService) {}

  @Get()
  @HasRoleDecorator([RolesEnum.Admin, RolesEnum.Coordinador])
  public async findAll() {
    return await this.rolesService.findAll();
  }
}

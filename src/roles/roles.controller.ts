import { Controller, Get } from '@nestjs/common';

import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
  public constructor(private readonly rolesService: RolesService) {}

  @Get()
  public async findAll() {
    return await this.rolesService.findAll();
  }
}

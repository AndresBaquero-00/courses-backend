import { Injectable } from '@nestjs/common';

import { RolesEntity } from './entities';
import { RolesRepository } from './repositories';

@Injectable()
export class RolesService {
  public constructor(private readonly rolesRepository: RolesRepository) {}

  public async findAll(): Promise<RolesEntity[]> {
    return await this.rolesRepository.findAll();
  }
}

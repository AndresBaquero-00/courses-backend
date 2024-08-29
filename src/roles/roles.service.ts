import { Injectable } from '@nestjs/common';

import { RolesRepository } from './repositories';
import { RolesEntity } from './entities';

@Injectable()
export class RolesService {
  public constructor(private readonly rolesRepository: RolesRepository) {}

  public async findAll(): Promise<RolesEntity[]> {
    return await this.rolesRepository.findAll();
  }
}

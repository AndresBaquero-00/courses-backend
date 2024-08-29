import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { RolesEntity } from '../entities';

@Injectable()
export class RolesRepository extends Repository<RolesEntity> {
  public constructor(private dataSource: DataSource) {
    super(RolesEntity, dataSource.createEntityManager());
  }

  public async findById(id: number): Promise<RolesEntity> {
    return await this.findOne({
      where: { id },
    });
  }
}

import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { ReadRepository } from 'src/shared/interfaces';
import { RolesEntity } from '../entities';

@Injectable()
export class RolesRepository
  extends Repository<RolesEntity>
  implements ReadRepository<RolesEntity>
{
  public constructor(private dataSource: DataSource) {
    super(RolesEntity, dataSource.createEntityManager());
  }

  public async findAll(): Promise<RolesEntity[]> {
    return await this.find();
  }

  public async findById(id: number): Promise<RolesEntity> {
    return await this.findOne({
      where: { id },
    });
  }
}

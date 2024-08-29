import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { ReadRepository } from 'src/shared/interfaces';
import { ModalitiesEntity } from '../entities';

@Injectable()
export class ModalitiesRepository
  extends Repository<ModalitiesEntity>
  implements ReadRepository<ModalitiesEntity>
{
  public constructor(private dataSource: DataSource) {
    super(ModalitiesEntity, dataSource.createEntityManager());
  }

  public async findAll(): Promise<ModalitiesEntity[]> {
    return await this.find();
  }

  public async findById(id: number): Promise<ModalitiesEntity> {
    return await this.findOne({
      where: { id },
    });
  }
}

import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { ReadRepository } from 'src/shared/interfaces';
import { InscriptionStatusEntity } from '../entities';

@Injectable()
export class InscriptionStatusRepository
  extends Repository<InscriptionStatusEntity>
  implements ReadRepository<InscriptionStatusEntity>
{
  public constructor(private dataSource: DataSource) {
    super(InscriptionStatusEntity, dataSource.createEntityManager());
  }

  public async findAll(): Promise<InscriptionStatusEntity[]> {
    return await this.find();
  }

  public async findById(id: number): Promise<InscriptionStatusEntity> {
    return await this.findOne({
      where: { id },
    });
  }
}

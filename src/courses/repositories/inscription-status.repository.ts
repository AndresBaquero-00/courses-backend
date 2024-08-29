import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { InscriptionStatusEntity } from '../entities';

@Injectable()
export class InscriptionStatusRepository extends Repository<InscriptionStatusEntity> {
  public constructor(private dataSource: DataSource) {
    super(InscriptionStatusEntity, dataSource.createEntityManager());
  }
}

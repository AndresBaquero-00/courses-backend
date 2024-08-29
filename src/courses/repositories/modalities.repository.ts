import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { ModalitiesEntity } from '../entities';

@Injectable()
export class ModalitiesRepository extends Repository<ModalitiesEntity> {
  public constructor(private dataSource: DataSource) {
    super(ModalitiesEntity, dataSource.createEntityManager());
  }
}

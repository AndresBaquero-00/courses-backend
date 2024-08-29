import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { CategoriesEntity } from '../entities';

@Injectable()
export class CategoriesRepository extends Repository<CategoriesEntity> {
  public constructor(private dataSource: DataSource) {
    super(CategoriesEntity, dataSource.createEntityManager());
  }
}

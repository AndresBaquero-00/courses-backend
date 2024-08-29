import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { CoursesEntity } from '../entities';

@Injectable()
export class CoursesRepository extends Repository<CoursesEntity> {
  public constructor(private dataSource: DataSource) {
    super(CoursesEntity, dataSource.createEntityManager());
  }
}

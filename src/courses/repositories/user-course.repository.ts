import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { UserCourseEntity } from '../entities';

@Injectable()
export class UserCourseRepository extends Repository<UserCourseEntity> {
  public constructor(private dataSource: DataSource) {
    super(UserCourseEntity, dataSource.createEntityManager());
  }
}

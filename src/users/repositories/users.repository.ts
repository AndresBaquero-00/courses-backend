import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { UsersEntity } from '../entities';

@Injectable()
export class UsersRepository extends Repository<UsersEntity> {
  public constructor(private dataSource: DataSource) {
    super(UsersEntity, dataSource.createEntityManager());
  }
}

import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { ReadRepository } from 'src/shared/interfaces';
import { UserCourseEntity } from '../entities';

@Injectable()
export class UserCourseRepository
  extends Repository<UserCourseEntity>
  implements ReadRepository<UserCourseEntity>
{
  public constructor(private dataSource: DataSource) {
    super(UserCourseEntity, dataSource.createEntityManager());
  }

  public async findAll(): Promise<UserCourseEntity[]> {
    return await this.find();
  }

  public async findById(id: number): Promise<UserCourseEntity> {
    return await this.findOne({
      where: { id },
    });
  }
}

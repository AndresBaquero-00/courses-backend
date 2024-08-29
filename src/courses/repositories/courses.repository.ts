import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { ReadRepository } from 'src/shared/interfaces';
import { CoursesEntity } from '../entities';

@Injectable()
export class CoursesRepository
  extends Repository<CoursesEntity>
  implements ReadRepository<CoursesEntity>
{
  public constructor(private dataSource: DataSource) {
    super(CoursesEntity, dataSource.createEntityManager());
  }

  public async findAll(page: number, size: number): Promise<CoursesEntity[]> {
    return await this.find({
      take: size,
      skip: page * size,
      relations: { category: true, modality: true },
      order: {
        createdAt: 'DESC',
      },
    });
  }

  public async findById(id: number): Promise<CoursesEntity> {
    return await this.findOne({
      where: { id },
    });
  }
}

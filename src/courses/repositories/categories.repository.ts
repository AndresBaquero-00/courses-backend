import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { ReadRepository } from 'src/shared/interfaces';
import { CategoriesEntity } from '../entities';

@Injectable()
export class CategoriesRepository
  extends Repository<CategoriesEntity>
  implements ReadRepository<CategoriesEntity>
{
  public constructor(private dataSource: DataSource) {
    super(CategoriesEntity, dataSource.createEntityManager());
  }

  public async findAll(): Promise<CategoriesEntity[]> {
    return await this.find();
  }

  public async findById(id: number): Promise<CategoriesEntity> {
    return await this.findOne({
      where: { id },
    });
  }
}

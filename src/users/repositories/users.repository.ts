import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { UsersEntity } from '../entities';

@Injectable()
export class UsersRepository extends Repository<UsersEntity> {
  public constructor(private dataSource: DataSource) {
    super(UsersEntity, dataSource.createEntityManager());
  }

  public async findAll(): Promise<UsersEntity[]> {
    return await this.find({
      relations: { role: true },
    });
  }

  public async findById(id: number): Promise<UsersEntity> {
    return await this.findOne({
      relations: { role: true },
      where: { id },
    });
  }

  public async findByEmail(email: string): Promise<UsersEntity> {
    return await this.findOne({
      relations: { role: true },
      where: { email },
    });
  }
}

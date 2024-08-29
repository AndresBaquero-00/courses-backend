import { BadRequestException, Injectable } from '@nestjs/common';
import { QueryFailedError } from 'typeorm';

import { RolesRepository } from 'src/roles/repositories';
import { CreateUserDTO } from './dto';
import { UsersEntity } from './entities';
import { UsersRepository } from './repositories';

@Injectable()
export class UsersService {
  public constructor(
    private usersRepository: UsersRepository,
    private rolesRepository: RolesRepository,
  ) {}

  public async findAll(): Promise<UsersEntity[]> {
    return await this.usersRepository.findAll();
  }

  public async findById(id: number): Promise<UsersEntity> {
    return await this.usersRepository.findById(id);
  }

  public async findByEmail(email: string): Promise<UsersEntity> {
    return await this.usersRepository.findByEmail(email);
  }

  public async create(user: CreateUserDTO): Promise<{ id: number }> {
    const role = await this.rolesRepository.findById(user.role);
    try {
      const saved = await this.usersRepository.save({ ...user, role });

      return { id: saved.id };
    } catch (e: unknown) {
      const err = e as QueryFailedError;
      console.log(err.message);
      throw new BadRequestException('El correo ya se encuentra registrado.');
    }
  }
}

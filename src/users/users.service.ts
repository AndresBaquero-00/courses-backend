import { BadRequestException, Injectable } from '@nestjs/common';
import { QueryFailedError } from 'typeorm';

import { RolesRepository } from 'src/roles/repositories';
import { CreateUserDTO, UpdateUserDTO } from './dto';
import { UsersEntity } from './entities';
import { UsersRepository } from './repositories';

@Injectable()
export class UsersService {
  public constructor(
    private readonly usersRepository: UsersRepository,
    private readonly rolesRepository: RolesRepository,
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

  public async update(id: number, user: UpdateUserDTO): Promise<void> {
    const saved = await this.usersRepository.findById(id);
    if (saved === null) {
      throw new BadRequestException('El usuario no existe.');
    }

    const role = await this.rolesRepository.findById(user.role);
    try {
      await this.usersRepository.update(
        { id },
        {
          ...user,
          role: role,
        },
      );
    } catch (e: unknown) {
      const err = e as QueryFailedError;
      console.log(err.message);
      throw new BadRequestException('El correo ya se encuentra registrado.');
    }
  }

  public async delete(id: number): Promise<void> {
    const saved = await this.usersRepository.findById(id);
    if (saved === null) {
      throw new BadRequestException('El usuario no existe.');
    }

    this.usersRepository.delete({ id });
  }
}

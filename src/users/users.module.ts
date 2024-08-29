import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RolesModule } from 'src/roles/roles.module';
import { UsersEntity } from './entities';
import { UsersRepository } from './repositories';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity]), RolesModule],
  exports: [TypeOrmModule, UsersRepository],
  providers: [UsersRepository],
})
export class UsersModule {}

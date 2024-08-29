import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersEntity } from './entities';
import { RolesModule } from 'src/roles/roles.module';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity]), RolesModule],
  exports: [TypeOrmModule],
})
export class UsersModule {}

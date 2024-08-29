import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RolesModule } from 'src/roles/roles.module';
import { UsersEntity } from './entities';
import { UsersRepository } from './repositories';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity]), RolesModule],
  exports: [TypeOrmModule, UsersRepository, UsersService],
  providers: [UsersRepository, UsersService],
  controllers: [UsersController],
})
export class UsersModule {}

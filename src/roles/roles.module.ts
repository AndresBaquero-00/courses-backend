import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RolesEntity } from './entities';
import { RolesRepository } from './repositories';

@Module({
  imports: [TypeOrmModule.forFeature([RolesEntity])],
  exports: [TypeOrmModule, RolesRepository],
  providers: [RolesRepository],
})
export class RolesModule {}

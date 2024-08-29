import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RolesEntity } from './entities';
import { RolesRepository } from './repositories';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';

@Module({
  imports: [TypeOrmModule.forFeature([RolesEntity])],
  exports: [TypeOrmModule, RolesRepository],
  providers: [RolesRepository, RolesService],
  controllers: [RolesController],
})
export class RolesModule {}

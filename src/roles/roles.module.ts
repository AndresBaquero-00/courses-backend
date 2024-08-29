import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RolesEntity } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([RolesEntity])],
  exports: [TypeOrmModule],
})
export class RolesModule {}

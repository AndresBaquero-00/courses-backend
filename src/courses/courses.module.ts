import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersEntity } from 'src/users/entities';
import {
  CategoriesEntity,
  CoursesEntity,
  InscriptionStatusEntity,
  ModalitiesEntity,
  UserCourseEntity,
} from './entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CategoriesEntity,
      CoursesEntity,
      InscriptionStatusEntity,
      ModalitiesEntity,
      UserCourseEntity,
    ]),
    UsersEntity,
  ],
  exports: [TypeOrmModule],
})
export class CoursesModule {}

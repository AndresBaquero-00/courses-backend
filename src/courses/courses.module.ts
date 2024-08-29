import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersEntity } from 'src/users/entities';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import {
  CategoriesEntity,
  CoursesEntity,
  InscriptionStatusEntity,
  ModalitiesEntity,
  UserCourseEntity,
} from './entities';
import {
  CategoriesRepository,
  CoursesRepository,
  InscriptionStatusRepository,
  ModalitiesRepository,
  UserCourseRepository,
} from './repositories';

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
  exports: [
    TypeOrmModule,
    CategoriesRepository,
    CoursesRepository,
    InscriptionStatusRepository,
    ModalitiesRepository,
    UserCourseRepository,
  ],
  providers: [
    CategoriesRepository,
    CoursesRepository,
    InscriptionStatusRepository,
    ModalitiesRepository,
    UserCourseRepository,
    CoursesService,
  ],
  controllers: [CoursesController],
})
export class CoursesModule {}

import { Injectable } from '@nestjs/common';

import { CreateCourseDTO } from './dto';
import {
  CategoriesEntity,
  CoursesEntity,
  InscriptionStatusEntity,
  ModalitiesEntity,
} from './entities';
import {
  CategoriesRepository,
  CoursesRepository,
  InscriptionStatusRepository,
  ModalitiesRepository,
  UserCourseRepository,
} from './repositories';

@Injectable()
export class CoursesService {
  public constructor(
    private readonly categoriesRepository: CategoriesRepository,
    private readonly coursesRepository: CoursesRepository,
    private readonly inscriptionStatusRepository: InscriptionStatusRepository,
    private readonly modalitiesRepository: ModalitiesRepository,
    private readonly userCourseRepository: UserCourseRepository,
  ) {}

  public async findAllCourses(
    page: number = 0,
    size: number = 10,
  ): Promise<CoursesEntity[]> {
    return this.coursesRepository.findAll(page, size);
  }

  public async createCourse(course: CreateCourseDTO): Promise<{ id: number }> {
    const category = await this.categoriesRepository.findById(course.category);
    const modality = await this.modalitiesRepository.findById(course.modality);
    const saved = await this.coursesRepository.save({
      ...course,
      category,
      modality,
    });
    return { id: saved.id };
  }

  public async findAllCategories(): Promise<CategoriesEntity[]> {
    return this.categoriesRepository.findAll();
  }

  public async findAllInscriptionStatus(): Promise<InscriptionStatusEntity[]> {
    return this.inscriptionStatusRepository.findAll();
  }

  public async findAllModalities(): Promise<ModalitiesEntity[]> {
    return this.modalitiesRepository.findAll();
  }
}

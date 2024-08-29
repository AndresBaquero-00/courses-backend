import { BadRequestException, Injectable } from '@nestjs/common';

import { UsersRepository } from 'src/users/repositories';
import { CreateCourseDTO, CreateUserCourseDTO } from './dto';
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
import { UpdateCourseDTO } from './dto/update-course.dto';

@Injectable()
export class CoursesService {
  public constructor(
    private readonly categoriesRepository: CategoriesRepository,
    private readonly coursesRepository: CoursesRepository,
    private readonly inscriptionStatusRepository: InscriptionStatusRepository,
    private readonly modalitiesRepository: ModalitiesRepository,
    private readonly userCourseRepository: UserCourseRepository,
    private readonly usersRepository: UsersRepository,
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

  public async updateCourse(
    id: number,
    course: UpdateCourseDTO,
  ): Promise<void> {
    const saved = await this.coursesRepository.findById(id);
    if (saved === null) {
      throw new BadRequestException('El curso no existe.');
    }

    const category = await this.categoriesRepository.findById(course.category);
    const modality = await this.modalitiesRepository.findById(course.modality);
    await this.coursesRepository.update(
      { id },
      {
        ...course,
        category,
        modality,
      },
    );
  }

  public async deleteCourse(id: number): Promise<void> {
    const saved = await this.coursesRepository.findById(id);
    if (saved === null) {
      throw new BadRequestException('El curso no existe.');
    }

    this.coursesRepository.delete({ id });
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

  public async findAllUserCourse(
    page: number = 0,
    size: number = 10,
  ): Promise<UserCourseEntity[]> {
    return this.userCourseRepository.findAll(page, size);
  }

  public async createUserCourse(
    userCourse: CreateUserCourseDTO,
  ): Promise<{ id: number }> {
    const user = await this.usersRepository.findById(userCourse.user);
    const course = await this.coursesRepository.findById(userCourse.course);
    const inscriptionStatus = await this.inscriptionStatusRepository.findById(
      userCourse.inscriptionStatus,
    );
    const saved = await this.userCourseRepository.save({
      ...userCourse,
      user,
      course,
      inscriptionStatus,
    });
    return { id: saved.id };
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { CoursesService } from './courses.service';
import { CreateCourseDTO, CreateUserCourseDTO, QueryPaginateDTO } from './dto';
import { UpdateCourseDTO } from './dto/update-course.dto';
import { UpdateUserCourseDTO } from './dto/update-user-course.dto';

@Controller('courses')
export class CoursesController {
  public constructor(private readonly coursesService: CoursesService) {}

  @Get()
  public async findAllCourses(@Query() query: QueryPaginateDTO) {
    return await this.coursesService.findAllCourses(query.page, query.size);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  public async createCourse(@Body() course: CreateCourseDTO) {
    return await this.coursesService.createCourse(course);
  }

  @Patch('/:id')
  public async updateCourse(
    @Param('id') id: number,
    @Body() course: UpdateCourseDTO,
  ) {
    return await this.coursesService.updateCourse(id, course);
  }

  @Delete('/:id')
  public async deleteCourse(@Param('id') id: number) {
    return await this.coursesService.deleteCourse(id);
  }

  @Get('categories')
  public async findAllCategories() {
    return await this.coursesService.findAllCategories();
  }

  @Get('inscription-status')
  public async findAllInscriptionStatus() {
    return await this.coursesService.findAllInscriptionStatus();
  }

  @Get('modalities')
  public async findAllModalities() {
    return await this.coursesService.findAllModalities();
  }

  @Get('user-course')
  public async findAllUserCourse(@Query() query: QueryPaginateDTO) {
    return await this.coursesService.findAllUserCourse(query.page, query.size);
  }

  @Post('user-course')
  public async createUserCourse(@Body() userCourse: CreateUserCourseDTO) {
    return await this.coursesService.createUserCourse(userCourse);
  }

  @Patch('user-course/:id')
  public async updateUserCourse(
    @Param('id') id: number,
    @Body() userCourse: UpdateUserCourseDTO,
  ) {
    return await this.coursesService.updateUserCourse(id, userCourse);
  }

  @Delete('user-course/:id')
  public async deleteUserCourse(@Param('id') id: number) {
    return await this.coursesService.deleteUserCourse(id);
  }
}

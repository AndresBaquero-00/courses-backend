import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Query,
} from '@nestjs/common';

import { CoursesService } from './courses.service';
import { CreateCourseDTO, CreateUserCourseDTO, QueryPaginateDTO } from './dto';

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
}

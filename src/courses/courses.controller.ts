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
  UseGuards,
} from '@nestjs/common';

import { JwtAuthGuard } from 'src/auth/guards';
import { HasRoleDecorator } from 'src/roles/decorators';
import { RolesEnum } from 'src/roles/enums';
import { RolesGuard } from 'src/roles/guards';
import { CoursesService } from './courses.service';
import {
  CreateCourseDTO,
  CreateUserCourseDTO,
  QueryPaginateDTO,
  UpdateCourseDTO,
  UpdateUserCourseDTO,
} from './dto';

@Controller('courses')
@UseGuards(JwtAuthGuard, RolesGuard)
export class CoursesController {
  public constructor(private readonly coursesService: CoursesService) {}

  @Get()
  public async findAllCourses(@Query() query: QueryPaginateDTO) {
    return await this.coursesService.findAllCourses(query.page, query.size);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @HasRoleDecorator([RolesEnum.Admin, RolesEnum.Coordinador])
  public async createCourse(@Body() course: CreateCourseDTO) {
    return await this.coursesService.createCourse(course);
  }

  @Patch('/:id')
  @HasRoleDecorator([RolesEnum.Admin, RolesEnum.Coordinador])
  public async updateCourse(
    @Param('id') id: number,
    @Body() course: UpdateCourseDTO,
  ) {
    return await this.coursesService.updateCourse(id, course);
  }

  @Delete('/:id')
  @HasRoleDecorator([RolesEnum.Admin, RolesEnum.Coordinador])
  public async deleteCourse(@Param('id') id: number) {
    return await this.coursesService.deleteCourse(id);
  }

  @Get('categories')
  @HasRoleDecorator([RolesEnum.Admin, RolesEnum.Coordinador])
  public async findAllCategories() {
    return await this.coursesService.findAllCategories();
  }

  @Get('inscription-status')
  @HasRoleDecorator([RolesEnum.Admin, RolesEnum.Coordinador])
  public async findAllInscriptionStatus() {
    return await this.coursesService.findAllInscriptionStatus();
  }

  @Get('modalities')
  @HasRoleDecorator([RolesEnum.Admin, RolesEnum.Coordinador])
  public async findAllModalities() {
    return await this.coursesService.findAllModalities();
  }

  @Get('user-course')
  public async findAllUserCourse(@Query() query: QueryPaginateDTO) {
    return await this.coursesService.findAllUserCourse(query.page, query.size);
  }

  @Post('user-course')
  @HasRoleDecorator([RolesEnum.Admin, RolesEnum.Coordinador])
  public async createUserCourse(@Body() userCourse: CreateUserCourseDTO) {
    return await this.coursesService.createUserCourse(userCourse);
  }

  @Patch('user-course/:id')
  @HasRoleDecorator([RolesEnum.Admin, RolesEnum.Coordinador])
  public async updateUserCourse(
    @Param('id') id: number,
    @Body() userCourse: UpdateUserCourseDTO,
  ) {
    return await this.coursesService.updateUserCourse(id, userCourse);
  }

  @Delete('user-course/:id')
  @HasRoleDecorator([RolesEnum.Admin, RolesEnum.Coordinador])
  public async deleteUserCourse(@Param('id') id: number) {
    return await this.coursesService.deleteUserCourse(id);
  }
}

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
  Req,
  UseGuards,
} from '@nestjs/common';

import { JwtAuthGuard } from 'src/auth/guards';
import { HasRoleDecorator } from 'src/roles/decorators';
import { RolesEnum } from 'src/roles/enums';
import { RolesGuard } from 'src/roles/guards';
import { CreateUserDTO, UpdateUserDTO } from './dto';
import { UsersService } from './users.service';

@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)
export class UsersController {
  public constructor(private readonly usersService: UsersService) {}

  @Get()
  @HasRoleDecorator([RolesEnum.Admin, RolesEnum.Coordinador, RolesEnum.Docente])
  public async findAll(@Req() req: Request) {
    return this.usersService.findAll();
  }

  @Get('/:id')
  @HasRoleDecorator([RolesEnum.Admin, RolesEnum.Coordinador, RolesEnum.Docente])
  public async findById(@Param('id') id: number) {
    return this.usersService.findById(id);
  }

  @Post()
  @HasRoleDecorator([RolesEnum.Admin, RolesEnum.Coordinador, RolesEnum.Docente])
  @HttpCode(HttpStatus.CREATED)
  public async create(@Body() user: CreateUserDTO) {
    return this.usersService.create(user);
  }

  @Patch('/:id')
  @HasRoleDecorator([RolesEnum.Admin, RolesEnum.Coordinador])
  public async update(@Param('id') id: number, @Body() user: UpdateUserDTO) {
    return this.usersService.update(id, user);
  }

  @Delete('/:id')
  @HasRoleDecorator([RolesEnum.Admin, RolesEnum.Coordinador])
  public async delete(@Param('id') id: number) {
    return this.usersService.delete(id);
  }
}

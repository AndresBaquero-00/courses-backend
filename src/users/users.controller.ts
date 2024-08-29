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
} from '@nestjs/common';

import { CreateUserDTO, UpdateUserDTO } from './dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  public constructor(private readonly usersService: UsersService) {}

  @Get()
  public async findAll(@Req() req: Request) {
    return this.usersService.findAll();
  }

  @Get('/:id')
  public async findById(@Param('id') id: number) {
    return this.usersService.findById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  public async create(@Body() user: CreateUserDTO) {
    return this.usersService.create(user);
  }

  @Patch('/:id')
  public async update(@Param('id') id: number, @Body() user: UpdateUserDTO) {
    return this.usersService.update(id, user);
  }

  @Delete('/:id')
  public async delete(@Param('id') id: number) {
    return this.usersService.delete(id);
  }
}

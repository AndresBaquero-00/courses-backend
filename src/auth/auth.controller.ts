import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';

import { LoginDTO } from './dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  public constructor(private readonly authService: AuthService) {}

  @Post('login')
  public async login(@Body() data: LoginDTO, @Res() response: Response) {
    const { token, ...user } = await this.authService.login(data.email);
    return response
      .status(HttpStatus.OK)
      .header('Authorization', `Bearer ${token}`)
      .send({
        user,
        token,
      });
  }
}

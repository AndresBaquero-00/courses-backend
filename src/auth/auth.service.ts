import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from 'src/users/users.service';
import type { ILogin, IPayload } from './interfaces';

@Injectable()
export class AuthService {
  public constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  public async login(email: string): Promise<ILogin> {
    const user = await this.usersService.findByEmail(email);
    if (user === null) {
      throw new UnauthorizedException('El usuario no se encuentra registrado.');
    }

    const payload: IPayload = {
      id: user.id,
      name: user.firstName + ' ' + user.lastName,
      role: user.role.name,
    };

    const token = this.jwtService.sign(payload);
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      role: user.role.name,
      token: token,
    };
  }
}

import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDTO {
  @IsEmail()
  @IsNotEmpty({ message: 'El correo del usuario es obligatorio.' })
  email: string;
}

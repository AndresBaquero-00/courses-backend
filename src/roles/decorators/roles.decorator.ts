import { Reflector } from '@nestjs/core';

import { RolesEnum } from '../enums';

export const HasRoleDecorator = Reflector.createDecorator<RolesEnum[]>();

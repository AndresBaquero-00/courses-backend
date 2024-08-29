import { Injectable } from '@nestjs/common';

import { RolesRepository } from './roles/repositories';
import {
  CategoriesRepository,
  InscriptionStatusRepository,
  ModalitiesRepository,
} from './courses/repositories';

@Injectable()
export class AppService {
  public constructor(
    private readonly categoriesRepository: CategoriesRepository,
    private readonly inscriptionStatusRepository: InscriptionStatusRepository,
    private readonly modalitiesRepository: ModalitiesRepository,
    private readonly rolesRepository: RolesRepository,
  ) {}

  public async generateSeed(): Promise<void> {
    await this.rolesRepository.save([
      { id: 1, name: 'Admin' },
      { id: 2, name: 'Coordinador' },
      { id: 3, name: 'Docente' },
      { id: 4, name: 'Estudiante' },
    ]);

    await this.inscriptionStatusRepository.save([
      { id: 1, name: 'Inscripto' },
      { id: 2, name: 'Aprobado' },
      { id: 3, name: 'Rechazado' },
      { id: 4, name: 'Certificado' },
    ]);

    await this.categoriesRepository.save([
      { id: 1, name: 'Programación' },
      { id: 2, name: 'Big Data' },
      { id: 3, name: 'Blockchain' },
      { id: 4, name: 'Marketing' },
    ]);

    await this.modalitiesRepository.save([
      { id: 1, name: 'Virtual' },
      { id: 2, name: 'Remoto' },
      { id: 3, name: 'Presencial' },
    ]);
  }
}

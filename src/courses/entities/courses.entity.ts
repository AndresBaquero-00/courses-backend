import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { CategoriesEntity } from './categories.entity';
import { ModalitiesEntity } from './modalities.entity';

@Entity({ name: 'courses' })
export class CoursesEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => CategoriesEntity)
  @JoinColumn({ name: 'category_id' })
  category: CategoriesEntity;

  @ManyToOne(() => ModalitiesEntity)
  @JoinColumn({ name: 'modality_id' })
  modality: ModalitiesEntity;

  @Column()
  duration: number;

  @Column()
  couta: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}

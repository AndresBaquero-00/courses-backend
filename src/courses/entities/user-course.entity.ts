import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { UsersEntity } from 'src/users/entities';
import { CoursesEntity } from './courses.entity';
import { InscriptionStatusEntity } from './inscription-status.entity';

@Entity({ name: 'user_course' })
export class UserCourseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(() => UsersEntity, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: UsersEntity;

  @ManyToOne(() => CoursesEntity, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'course_id' })
  course: CoursesEntity;

  @ManyToOne(() => InscriptionStatusEntity)
  @JoinColumn({ name: 'inscription_status_id' })
  inscriptionStatus: InscriptionStatusEntity;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}

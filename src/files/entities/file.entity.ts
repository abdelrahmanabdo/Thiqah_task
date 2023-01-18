import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('files')
export class File {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'path' })
  path: string;

  @Column({ name: 'created_at' })
  createdAt: Date;
}

/* eslint-disable camelcase */
import {
  PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Entity,
} from 'typeorm';

@Entity('tools')
export default class Tool {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  link: string;

  @Column()
  description: string;

  @Column('text', { array: true })
  tags: string[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

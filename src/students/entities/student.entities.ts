import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
// import { Result } from '../../results/entities/result.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id!: string;

@Column()
surname!: string;

@Column()
firstName!: string;

  @Column()
  class!: string;

//   @Column({ nullable: true })
//   gender: string;

//   @OneToMany(() => Result, (result) => result.student)
//   results: Result[];
}
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  name: string;

  @Column("text")
  email: string;

  @Column("integer")
  age: number;

  constructor() {
    this.id = 0; // Default value (not needed for auto-generated columns)
    this.name = "";
    this.email = "";
    this.age = 0;
  }
}

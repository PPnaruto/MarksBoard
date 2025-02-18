import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Photo {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100,
    })
    name: string

    @Column("text")
    description: string

    @Column()
    filename: string

    @Column("integer")
    views: number

    @Column()
    isPublished: boolean

    constructor() {
        this.id = 0; // Default value (not needed for auto-generated columns)
        this.name = "";
        this.description = "";
        this.filename = "";
        this.views = 0;
        this.isPublished = false;
      }
}
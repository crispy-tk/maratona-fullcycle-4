import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";
import { Exclude } from 'class-transformer';

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Exclude()
    @CreateDateColumn()
    created_at: Date;
}

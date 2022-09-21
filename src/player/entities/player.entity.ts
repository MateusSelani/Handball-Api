import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Player {

    @PrimaryGeneratedColumn('uuid')
    idPlayer: number;

    @Column()
    name: string;

    @Column()
    gender: string;

    @Column()
    isActive: boolean;
}

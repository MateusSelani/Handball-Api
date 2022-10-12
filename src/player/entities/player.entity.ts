import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Player {

    @PrimaryGeneratedColumn()
    idPlayer: string;

    @Column()
    namePlayer: string;

    @Column()
    genderPlayer: string;

    @Column()
    isActivePlayer: boolean;

}

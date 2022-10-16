import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Championship {

    @PrimaryGeneratedColumn("uuid")
    idChampionship: string;

    @Column()
    nameChampionship: string;

    @Column()
    yearChampionship: number;
}

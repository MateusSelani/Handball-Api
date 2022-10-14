import { Column, Entity, PrimaryGeneratedColumn, Table } from "typeorm";

@Entity()
export class Team {

    @PrimaryGeneratedColumn("uuid")
    idTeam: string;

    @Column()
    nameTeam: string;
}

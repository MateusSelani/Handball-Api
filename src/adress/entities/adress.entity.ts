import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Adress {

    @PrimaryGeneratedColumn("uuid")
    idAdress: string;

    @Column()
    rua: string;
}

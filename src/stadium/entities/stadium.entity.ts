import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Stadium {

    @PrimaryGeneratedColumn("uuid")
    idStadium: string;

    @Column()
    nameStadium: string;

}

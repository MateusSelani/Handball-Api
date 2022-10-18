import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Classification {

    @PrimaryGeneratedColumn("uuid")
    idClassification: string;

    @Column()
    pointsTeam: number;

    @Column()
    goalDifference: number;
}

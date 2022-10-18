import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Match {

    @PrimaryGeneratedColumn("uuid")
    idMatch: string;

    @Column()
    goalHomeTeam: number;

    @Column()
    goalVisitingTeam: number;

    @Column()
    dateMatch: Date;

    @Column()
    occurredMatch: boolean;
}

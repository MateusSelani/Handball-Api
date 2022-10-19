import { Championship } from './../../championship/entities/championship.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @ManyToOne(() => Championship, (championship) => championship.match)
    championship: Championship;
}

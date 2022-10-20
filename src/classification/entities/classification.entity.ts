import { Team } from './../../team/entities/team.entity';
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Classification {

    @PrimaryGeneratedColumn("uuid")
    idClassification: string;

    @Column()
    pointsTeam: number;

    @Column()
    goalDifference: number;

    @OneToMany(() => Team, (team) => team.classification)
    teams: Team;
}

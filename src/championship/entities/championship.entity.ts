import { Classification } from './../../classification/entities/classification.entity';
import { Match } from './../../match/entities/match.entity';
import { Team } from './../../team/entities/team.entity';
import { Column, Entity, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Championship {

    @PrimaryGeneratedColumn("uuid")
    idChampionship: string;

    @Column()
    nameChampionship: string;

    @Column()
    yearChampionship: number;

    @OneToMany(() => Team, (team) => team.championship)
    teams: Team;

    @OneToMany(() => Match, (match) => match.championship)
    match: Match;

    @OneToOne(() => Classification)
    classification: Classification;
}
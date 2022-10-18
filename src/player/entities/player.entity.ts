import { Team } from './../../team/entities/team.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";

@Entity()
export class Player {

    @PrimaryGeneratedColumn("uuid")
    idPlayer: string;

    @Column()
    namePlayer: string;

    @Column()
    genderPlayer: string;

    @Column()
    isActivePlayer: boolean;

    @ManyToOne(() => Team, (team) => team.players, {
        cascade: true,
    })
    @JoinColumn()
    team: Team;

}

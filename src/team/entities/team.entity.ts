import { Championship } from './../../championship/entities/championship.entity';
import { Stadium } from './../../stadium/entities/stadium.entity';
import { Player } from "src/player/entities/player.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, Table } from "typeorm";

@Entity()
export class Team {

    @PrimaryGeneratedColumn("uuid")
    idTeam: string;

    @Column()
    nameTeam: string;

    @OneToMany(() => Player, (player) => player.team)
    players: Player[];

    @OneToOne(() => Player)
    @JoinColumn()
    captain: Player;

    @OneToOne(() => Stadium)
    home: Stadium;

    @ManyToOne(() => Championship, (championship) => championship.teams)
    @JoinColumn()
    championship: Championship;
}
import { Player } from "src/player/entities/player.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, Table } from "typeorm";

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
}
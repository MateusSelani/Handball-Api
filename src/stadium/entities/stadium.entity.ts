import { Adress } from "src/adress/entities/adress.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Stadium {

    @PrimaryGeneratedColumn("uuid")
    idStadium: string;

    @Column()
    nameStadium: string;

    @OneToOne(() => Adress,{
        cascade: true
    })
    @JoinColumn()
    adress: Adress;
}

import { Championship } from './../../championship/entities/championship.entity';
import { Stadium } from './../../stadium/entities/stadium.entity';
import { Player } from 'src/player/entities/player.entity';
import { IsNotEmpty, IsString } from "class-validator";

export class CreateTeamDto {

    @IsString()
    @IsNotEmpty()
    nameTeam: string;

    @IsNotEmpty()
    home: Stadium;

    @IsNotEmpty()
    championship: Championship;

    // @IsNotEmpty()
    // captain: Player;
}

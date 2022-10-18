import { Player } from 'src/player/entities/player.entity';
import { IsNotEmpty, IsString } from "class-validator";

export class CreateTeamDto {

    @IsString()
    @IsNotEmpty()
    nameTeam: string;

    // @IsNotEmpty()
    // captain: Player;
}

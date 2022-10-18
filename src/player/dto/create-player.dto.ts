import { Team } from './../../team/entities/team.entity';
import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreatePlayerDto {

    @IsString()
    @IsNotEmpty()
    namePlayer: string;
    
    @IsString()
    @IsNotEmpty()
    genderPlayer: string;

    @IsBoolean()
    @IsNotEmpty()
    isActivePlayer: boolean;

    @IsNotEmpty()
    team: Team;
}

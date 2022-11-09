import { IsNotEmpty, IsString } from "class-validator";

export class CreateTeamDto {

    @IsString()
    @IsNotEmpty()
    nameTeam: string;

    // @IsNotEmpty()
    // home: Stadium;

    // @IsNotEmpty()
    // championship: Championship;

    // @IsNotEmpty()
    // captain: Player;
}

import { IsNotEmpty, IsString } from "class-validator";

export class CreateTeamDto {

    @IsString()
    @IsNotEmpty()
    nameTeam: string;
}

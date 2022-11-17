import { IsNotEmpty, IsString } from "class-validator";

export class CreatePlayerDto {

    @IsString()
    @IsNotEmpty()
    namePlayer: string;
    
    @IsString()
    @IsNotEmpty()
    genderPlayer: string;

    isActivePlayer?: boolean;

    // @IsNotEmpty()
    // team: Team;
}

import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateChampionshipDto {

    @IsString()
    @IsNotEmpty()
    nameChampionship: string;

    @IsNumber()
    @IsNotEmpty()
    yearChampionship: number;
}

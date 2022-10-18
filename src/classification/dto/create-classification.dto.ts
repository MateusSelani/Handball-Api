import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateClassificationDto {

    @IsNumber()
    @IsNotEmpty()
    pointsTeam: number;

    @IsNumber()
    @IsNotEmpty()
    goalDifference: number;
}

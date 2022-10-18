import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateMatchDto {

    @IsNumber()
    @IsNotEmpty()
    goalHomeTeam: number;

    @IsNumber()
    @IsNotEmpty()
    goalVisitingTeam: number;
}

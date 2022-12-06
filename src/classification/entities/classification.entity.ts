import { Classification } from "@prisma/client";
import { IsNumber, IsUUID } from "class-validator";

export class ClassificationEntity implements Classification {
    @IsUUID()
    idClassification: string;
    @IsNumber()
    pointsTeam: number;
    @IsNumber()
    goalDifference: number;
    @IsUUID()
    idChampionship: string;
    @IsUUID()
    idTeam: string;
}

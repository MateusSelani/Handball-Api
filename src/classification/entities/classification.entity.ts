import { Classification } from "@prisma/client";

export class ClassificationEntity implements Classification {
    idClassification: string;
    pointsTeam: number;
    goalDifference: number;    
}

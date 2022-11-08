import { Match } from "@prisma/client";

export class MatchEntity implements Match {
    idMatch: string;
    goalHomeTeam: number;
    goalVisitingTeam: number;
    dateMatch: Date;
    occurredMatch: boolean;
}

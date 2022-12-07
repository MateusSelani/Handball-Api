import { Match } from '@prisma/client';

export class MatchEntity implements Match {
  idMatch: string;
  homeTeam: string;
  goalHomeTeam: number;
  visitingTeam: string;
  goalVisitingTeam: number;
  dateMatch: Date;
  occurredMatch: boolean;
  idChampionship: string;
}

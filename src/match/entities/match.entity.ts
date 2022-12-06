import { Match } from '@prisma/client';
import { IsBoolean, IsNumber, IsString, IsUUID } from 'class-validator';

export class MatchEntity implements Match {
  @IsUUID()
  idMatch: string;
  @IsString()
  homeTeam: string;
  @IsNumber()
  goalHomeTeam: number;
  @IsUUID()
  visitingTeam: string;
  @IsNumber()
  goalVisitingTeam: number;
  dateMatch: Date;
  @IsBoolean()
  occurredMatch: boolean;
  @IsUUID()
  idChampionship: string;
}

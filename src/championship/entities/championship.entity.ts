import { Championship } from '@prisma/client';
import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';

export class ChampionshipEntity implements Championship {
  @IsUUID()
  idChampionship: string;
  @IsString()
  @IsNotEmpty()
  nameChampionship: string;
  @IsNumber()
  @IsNotEmpty()
  yearChampionship: number;
}

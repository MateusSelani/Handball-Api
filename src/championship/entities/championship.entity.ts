import { Championship } from '@prisma/client';

export class ChampionshipEntity implements Championship {
  idChampionship: string;
  nameChampionship: string;
  yearChampionship: number;
}

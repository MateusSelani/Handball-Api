import { TeamOnChampionship } from "@prisma/client";

export class TeamOnChampionshipEntity implements TeamOnChampionship {
  id: string;
  idTeam: string;
  idChampionship: string;
}

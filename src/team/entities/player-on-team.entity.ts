import { PlayerOnTeam } from '@prisma/client';

export class PlayerOnTeamEntity implements PlayerOnTeam {
  id: string;
  idTeam: string;
  idPlayer: string;
}

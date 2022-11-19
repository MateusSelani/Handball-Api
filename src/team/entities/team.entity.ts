import { Team } from "@prisma/client";

export class TeamEntity implements Team {
    idTeam: string;
    nameTeam: string;
    idHome: string;
}
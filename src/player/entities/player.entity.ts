import { Player } from "@prisma/client";

export class PlayerEntity implements Player {
    idPlayer: string;
    namePlayer: string;
    genderPlayer: string;
    isActivePlayer: boolean
}

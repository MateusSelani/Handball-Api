import { Player } from "@prisma/client";
import { IsBoolean, IsString, IsUUID } from "class-validator";

export class PlayerEntity implements Player {
    @IsUUID()
    idPlayer: string;
    @IsString()
    namePlayer: string;
    @IsString()
    genderPlayer: string;
    @IsBoolean()
    isActivePlayer: boolean
}

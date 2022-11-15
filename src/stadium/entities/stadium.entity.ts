import { Adress, Stadium } from "@prisma/client";

export class StadiumEntity implements Stadium {
    idAdress: string;
    idStadium: string;
    nameStadium: string;
    adress: Adress;
}

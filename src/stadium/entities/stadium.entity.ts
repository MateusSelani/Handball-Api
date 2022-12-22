import { Adress, Stadium } from "@prisma/client";

export class StadiumEntity implements Stadium {
    idStadium: string;
    nameStadium: string;
    idAdress: string;
    adress: Adress;
}

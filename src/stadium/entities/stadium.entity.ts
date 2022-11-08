import { Stadium } from "@prisma/client";

export class StadiumEntity implements Stadium {
    idStadium: string;
    nameStadium: string;
}

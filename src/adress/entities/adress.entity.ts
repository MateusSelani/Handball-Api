import { Adress } from '@prisma/client';

export class AdressEntity implements Adress {
    idAdress: string;
    street: string;
}

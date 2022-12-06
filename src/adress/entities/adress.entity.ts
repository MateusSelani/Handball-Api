import { Adress } from '@prisma/client';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class AdressEntity implements Adress {
  @IsUUID()
  idAdress: string;

  @IsNotEmpty()
  @IsString()
  street: string;
}

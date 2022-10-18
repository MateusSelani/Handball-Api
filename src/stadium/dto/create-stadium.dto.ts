import { Adress } from 'src/adress/entities/adress.entity';
import { IsNotEmpty, IsString } from "class-validator";

export class CreateStadiumDto {
    
    @IsString()
    @IsNotEmpty()
    nameStadium: string;

    @IsNotEmpty()
    adress: Adress;
}

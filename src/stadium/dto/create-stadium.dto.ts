import { IsNotEmpty, IsString } from "class-validator";

export class CreateStadiumDto {
    
    @IsString()
    @IsNotEmpty()
    nameStadium: string;

    // @IsNotEmpty()
    // adress: Adress;
}

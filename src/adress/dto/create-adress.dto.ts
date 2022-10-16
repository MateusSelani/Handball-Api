import { IsNotEmpty, IsString } from "class-validator";

export class CreateAdressDto {
    
    @IsString()
    @IsNotEmpty()
    rua: string;
}

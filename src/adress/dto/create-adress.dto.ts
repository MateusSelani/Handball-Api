import { IsNotEmpty, IsString } from "class-validator";

export class CreateAdressDto {
    
    @IsString()
    @IsNotEmpty()
    street: string;
}

import { Injectable } from '@nestjs/common';
import { CreateAdressDto } from './dto/create-adress.dto';
import { UpdateAdressDto } from './dto/update-adress.dto';
import { AdressRepository } from './repositories/adress.repository';

@Injectable()
export class AdressService {
  constructor(private readonly ar: AdressRepository) {}

  create(dto: CreateAdressDto) {
    this.ar.create(dto);
    return dto;
  }

  update(id: string, dto: UpdateAdressDto) {
    this.ar.update(id, dto);
  }
}

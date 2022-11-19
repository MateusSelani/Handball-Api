import { Injectable } from '@nestjs/common';
import { CreateAdressDto } from './dto/create-adress.dto';
import { UpdateAdressDto } from './dto/update-adress.dto';
import { AdressRepository } from './repositories/adress.repository';

@Injectable()
export class AdressService {
  constructor(private readonly ar: AdressRepository) {}

  async create(dto: CreateAdressDto) {
    await this.ar.create(dto);
    return dto;
  }

  async update(id: string, dto: UpdateAdressDto) {
    return await this.ar.update(id, dto);
  }
}

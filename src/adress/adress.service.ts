import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAdressDto } from './dto/create-adress.dto';
import { UpdateAdressDto } from './dto/update-adress.dto';
import { AdressRepository } from './repositories/adress.repository';

@Injectable()
export class AdressService {
  constructor(private readonly ar: AdressRepository) {}

  async create(dto: CreateAdressDto) {
    if (dto) {
      await this.ar.create(dto);
      return dto;
    } else {
      throw new NotFoundException(`Invalid adress!`);
    }
  }

  async update(id: string, dto: UpdateAdressDto) {
    if (id && dto) {
      return await this.ar.update(id, dto);
    } else {
      throw new NotFoundException(`Adress not update!`);
    }
  }
}

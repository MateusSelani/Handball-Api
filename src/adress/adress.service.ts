import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common';
import { CreateAdressDto } from './dto/create-adress.dto';
import { UpdateAdressDto } from './dto/update-adress.dto';
import { AdressRepository } from './repositories/adress.repository';

@Injectable()
export class AdressService {
  constructor(private readonly ar: AdressRepository) {}

  async create(dto: CreateAdressDto) {
    const adress = await this.ar.create(dto);
    if (adress) {
      return dto;
    } else {
      throw new BadRequestException('Adress not created!');
    }
  }

  async update(id: string, dto: UpdateAdressDto) {
    const adress = await this.ar.update(id, dto);
    if (adress) {
      return adress;
    } else {
      throw new NotFoundException(`Adress ${id} not update!`);
    }
  }
}

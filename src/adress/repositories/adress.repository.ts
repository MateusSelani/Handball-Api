import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from './../../prisma/prisma.service';
import { CreateAdressDto } from './../dto/create-adress.dto';
import { UpdateAdressDto } from './../dto/update-adress.dto';

@Injectable()
export class AdressRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateAdressDto) {
    if (dto) {
      return await this.prisma.adress.create({
        data: dto,
      });
    } else {
      throw new NotFoundException(`Invalid adress!`);
    }
  }

  async update(id: string, dto: UpdateAdressDto) {
    if (id && dto) {
      return await this.prisma.adress.update({
        where: {
          idAdress: id,
        },
        data: dto,
      });
    } else {
      throw new NotFoundException(`Adress not update!`);
    }
  }
}

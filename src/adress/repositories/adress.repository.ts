import { Injectable } from '@nestjs/common';
import { PrismaService } from './../../prisma/prisma.service';
import { CreateAdressDto } from './../dto/create-adress.dto';
import { UpdateAdressDto } from './../dto/update-adress.dto';

@Injectable()
export class AdressRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateAdressDto) {
    return await this.prisma.adress.create({
      data: dto,
    });
  }

  async update(id: string, dto: UpdateAdressDto) {
    return await this.prisma.adress.update({
      where: {
        idAdress: id,
      },
      data: dto,
    });
  }
}

import { Injectable } from '@nestjs/common';
import { CreateStadiumDto } from '../dto/create-stadium.dto';
import { UpdateStadiumDto } from '../dto/update-stadium.dto';
import { PrismaService } from './../../prisma/prisma.service';

@Injectable()
export class StadiumRepository {
  constructor(private readonly prisma: PrismaService) {}

  async save(dto: CreateStadiumDto) {
    return await this.prisma.stadium.create({
      data: {
        nameStadium: dto.nameStadium,
        adress: { create: { street: dto.adress.street } },
      },
    });
  }

  findAll() {
    return this.prisma.stadium.findMany();
  }

  findAllWithAdress() {
    return this.prisma.stadium.findMany({
      include: {
        adress: { select: { idAdress: false, street: true, stadium: false } },
      },
    });
  }

  async findOne(id: string) {
    return await this.prisma.stadium.findUnique({
      where: { idStadium: id },
    });
  }

  async update(id: string, dto: UpdateStadiumDto) {
    return await this.prisma.stadium.update({
      where: { idStadium: id },
      data: {
        nameStadium: dto.nameStadium,
        adress: { update: { street: dto.adress?.street } },
      },
    });
  }

  async remove(id: string) {
    return await this.prisma.stadium.delete({
      where: { idStadium: id },
    });
  }
}

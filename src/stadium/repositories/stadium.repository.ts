import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStadiumDto } from '../dto/create-stadium.dto';
import { UpdateStadiumDto } from '../dto/update-stadium.dto';
import { PrismaService } from './../../prisma/prisma.service';

@Injectable()
export class StadiumRepository {
  constructor(private readonly prisma: PrismaService) {}

  async save(dto: CreateStadiumDto) {
    await this.prisma.stadium.create({
      data: {
        nameStadium: dto.nameStadium,
        adress: { create: { street: dto.adress.street } },
      },
    });
    return dto;
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
    const stadium = await this.prisma.stadium.findUnique({
      where: { idStadium: id },
    });
    if (stadium) {
      return stadium;
    } else {
      throw new NotFoundException(`Stadium ${id} not found`);
    }
  }

  async update(id: string, dto: UpdateStadiumDto) {
    const stadium = await this.prisma.stadium.update({
      where: { idStadium: id },
      data: {
        nameStadium: dto.nameStadium,
        adress: { update: { street: dto.adress?.street } },
      },
    });

    if (stadium) {
      return dto;
    } else {
      throw new NotFoundException(`Stadium ${id} not found`);
    }
  }

  async remove(id: string) {
    const stadium = await this.findOne(id);
    
    if (stadium) {
      await this.prisma.adress.delete({
        where: { idAdress: stadium.idAdress },
      });
      return this.prisma.stadium.delete({
        where: { idStadium: id },
      });
    } else {
      throw new NotFoundException(`Stadium ${id} not found`);
    }
  }
}

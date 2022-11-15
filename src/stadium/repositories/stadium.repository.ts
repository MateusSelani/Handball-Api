import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStadiumDto } from '../dto/create-stadium.dto';
import { UpdateStadiumDto } from '../dto/update-stadium.dto';
import { PrismaService } from './../../prisma/prisma.service';

@Injectable()
export class StadiumRepository {
  constructor(private readonly prisma: PrismaService) {}

  async save(dto: CreateStadiumDto) {
    await this.prisma.stadium.create({ data: dto });
    return dto;
  }

  findAll() {
    return this.prisma.stadium.findMany();
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
      data: dto
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
      return this.prisma.stadium.delete({ where: { idStadium: id } });
    } else {
      throw new NotFoundException(`Stadium ${id} not found`);
    }
  }
}

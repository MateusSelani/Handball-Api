import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateChampionshipDto } from '../dto/create-championship.dto';
import { UpdateChampionshipDto } from '../dto/update-championship.dto';

@Injectable()
export class ChampionshipRepository {
  constructor(private readonly prisma: PrismaService) {}

  async save(dto: CreateChampionshipDto) {
    await this.prisma.championship.create({
      data: dto,
    });
    return dto;
  }

  async findAll() {
    return await this.prisma.championship.findMany();
  }

  async findOne(id: string) {
    const champ = await this.prisma.championship.findUnique({
      where: { idChampionship: id },
    });
    if (champ) {
      return champ;
    } else {
      throw new NotFoundException(`Championship ${id} not found`);
    }
  }

  async update(id: string, dto: UpdateChampionshipDto) {
    const champ = await this.prisma.championship.update({
      where: { idChampionship: id },
      data: dto,
    });
    if (champ) {
      this.save(champ);
      return champ;
    } else {
      throw new NotFoundException(`Championship ${id} not found`);
    }
  }

  async remove(id: string) {
    const champ = await this.findOne(id);
    if (champ) {
      return this.prisma.championship.delete({ where: { idChampionship: id } });
    } else {
      throw new NotFoundException(`Championship ${id} not found`);
    }
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlayerDto } from '../dto/create-player.dto';
import { UpdatePlayerDto } from '../dto/update-player.dto';
import { PrismaService } from './../../prisma/prisma.service';

@Injectable()
export class PlayerRepository {
  constructor(private readonly prisma: PrismaService) {}

  async save(dto: CreatePlayerDto) {
    await this.prisma.player.create({ data: dto });
    return dto;
  }

  findAll() {
    return this.prisma.player.findMany();
  }

  async findOne(id: string) {
    const player = await this.prisma.player.findUnique({
      where: { idPlayer: id },
    });
    if (player) {
      return player;
    } else {
      return new NotFoundException(`Player ${id} not found`);
    }
  }

  async update(id: string, dto: UpdatePlayerDto) {
    const exists = await this.prisma.player.findUnique({
      where: { idPlayer: id },
    });

    if (exists) {
      await this.prisma.player.update({
        where: { idPlayer: id },
        data: dto,
      });
      return dto;
    } else {
      throw new NotFoundException(`Player ${id} not found`);
    }
  }

  async remove(id: string) {
    const player = await this.prisma.player.findUnique({
      where: { idPlayer: id },
    });
    if (player) {
      return await this.prisma.player.delete({ where: { idPlayer: id } });
    } else {
      throw new NotFoundException(`Player ${id} not found`);
    }
  }
}
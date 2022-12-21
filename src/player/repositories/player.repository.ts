import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from '../dto/create-player.dto';
import { UpdatePlayerDto } from '../dto/update-player.dto';
import { PrismaService } from './../../prisma/prisma.service';

@Injectable()
export class PlayerRepository {
  constructor(private readonly prisma: PrismaService) {}

  async save(dto: CreatePlayerDto) {
    return await this.prisma.player.create({ data: dto });
  }

  findAll() {
    return this.prisma.player.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.player.findUnique({
      where: { idPlayer: id },
    });
  }

  async update(id: string, dto: UpdatePlayerDto) {
    return await this.prisma.player.findUnique({
      where: { idPlayer: id },
    });
  }

  async remove(id: string) {
    return await this.prisma.player.findUnique({
      where: { idPlayer: id },
    });
  }
}

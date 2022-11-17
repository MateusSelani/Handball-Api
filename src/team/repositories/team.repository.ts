import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTeamDto } from '../dto/create-team.dto';
import { UpdateTeamDto } from '../dto/update-team.dto';
import { PrismaService } from './../../prisma/prisma.service';

@Injectable()
export class TeamRepository {
  constructor(private readonly prisma: PrismaService) {}

  async save(dto: CreateTeamDto) {
    await this.prisma.team.create({ data: dto });
    return dto;
  }

  findAll() {
    return this.prisma.team.findMany();
  }

  async findOne(id: string) {
    const team = await this.prisma.team.findUnique({ where: { idTeam: id } });
    if (team) {
      return team;
    } else {
      throw new NotFoundException(`Team ${id} not found`);
    }
  }

  async update(id: string, dto: UpdateTeamDto) {
    const team = await this.prisma.team.update({
      where: { idTeam: id },
      data: dto,
    });
    if (team) {
      this.save(team);
      return dto;
    } else {
      throw new NotFoundException(`Team ${id} not found`);
    }
  }

  async remove(id: string) {
    const team = await this.findOne(id);
    if (team) {
      return this.prisma.team.delete({ where: { idTeam: id } });
    } else {
      throw new NotFoundException(`Team ${id} not found`);
    }
  }
}

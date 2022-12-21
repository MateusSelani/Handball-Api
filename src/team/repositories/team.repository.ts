import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from '../dto/create-team.dto';
import { UpdateTeamDto } from '../dto/update-team.dto';
import { PrismaService } from './../../prisma/prisma.service';

@Injectable()
export class TeamRepository {
  constructor(private readonly prisma: PrismaService) {}

  async save(dto: CreateTeamDto) {
    return await this.prisma.team.create({ data: dto });
  }

  async findAll() {
    return await this.prisma.team.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.team.findUnique({ where: { idTeam: id } });
  }

  async update(id: string, dto: UpdateTeamDto) {
    return await this.prisma.team.update({
      where: { idTeam: id },
      data: dto,
    });
  }

  async remove(id: string) {
    return await this.prisma.team.delete({ where: { idTeam: id } });
  }

  // hire
  // async addPlayerOnTeam(idTeam: string, idPlayer: string) {
  //   const team = await this.prisma.team.findUnique({
  //     where: { idTeam },
  //   });
  //   const player = await this.prisma.player.findUnique({
  //     where: { idPlayer },
  //   });

  //   if (team || player) {
  //     idTeam = team.idTeam;
  //     idPlayer = player.idPlayer;
  //     return await this.prisma.playerOnTeam.create({
  //       data: {
  //         idTeam,
  //         idPlayer,
  //       },
  //     });
  //   } else {
  //     throw new NotFoundException(
  //       `Team ${idTeam} and/or Player ${idPlayer} not found`,
  //     );
  //   }
  // }
}

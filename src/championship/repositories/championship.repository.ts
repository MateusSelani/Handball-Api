import { Injectable, NotFoundException } from '@nestjs/common';
import { Championship } from '@prisma/client';
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

  // subscription in championship
  // async addTeamsOnChampionship(idTeam: string, idChampionship: string) {
  //   const team = await this.prisma.team.findUnique({
  //     where: { idTeam },
  //   });
  //   const champ = await this.prisma.championship.findUnique({
  //     where: { idChampionship },
  //   });
  //   const existence = await this.prisma.teamOnChampionship.findFirst({
  //     where: { idTeam, idChampionship },
  //   });

  //   if (existence) {
  //     throw new NotFoundException(
  //       `Team already registered in the championship`,
  //     );
  //   }

  //   if (team || champ) {
  //     idTeam = team.idTeam;
  //     idChampionship = champ.idChampionship;
  //     return await this.prisma.teamOnChampionship.create({
  //       data: {
  //         idTeam,
  //         idChampionship,
  //       },
  //     });
  //   } else {
  //     throw new NotFoundException(
  //       `Team ${idTeam} and/or ${idChampionship} not found`,
  //     );
  //   }
  // }

  // create classification witch teams
  async createClassification(champ: Championship) {
    const teams = await this.prisma.teamOnChampionship.findMany({
      where: { idChampionship: champ.idChampionship },
    });
    teams.forEach(async (team) => {
      await this.prisma.classification.create({
        data: {
          goalDifference: 0,
          pointsTeam: 0,
          idChampionship: champ.idChampionship,
          idTeam: team.idTeam,
        },
      });
    });
  }

  // create Matchs of Championship
  async createMatchsOfChampionship(idChampionship: string) {
    const teams = await this.prisma.teamOnChampionship.findMany({
      where: { idChampionship },
    });
    var homeTeam;
    var visitingTeam;
    teams.forEach((team) => {
      var { idTeam } = team;
      homeTeam = idTeam;
      teams.forEach(async (visiting) => {
        if (team !== visiting) {
          var { idTeam } = visiting;
          visitingTeam = idTeam;
          await this.prisma.match.create({
            data: {
              homeTeam,
              goalHomeTeam: 0,
              visitingTeam,
              goalVisitingTeam: 0,
              dateMatch: '2015-03-25T12:00:00Z',
              occurredMatch: false,
              idChampionship,
            },
          });
        }
      });
    });
  }
}

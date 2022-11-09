import { Module } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { TeamRepository } from './repositories/team.repository';
import { TeamController } from './team.controller';
import { TeamService } from './team.service';

@Module({
  controllers: [TeamController],
  providers: [TeamService, PrismaService, TeamRepository]
})
export class TeamModule {}

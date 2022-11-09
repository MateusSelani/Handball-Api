import { Module } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { ChampionshipController } from './championship.controller';
import { ChampionshipService } from './championship.service';
import { ChampionshipRepository } from './repositories/championship.repository';

@Module({
  controllers: [ChampionshipController],
  providers: [ChampionshipService, PrismaService, ChampionshipRepository]
})
export class ChampionshipModule {}

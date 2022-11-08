import { Module } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { ChampionshipController } from './championship.controller';
import { ChampionshipService } from './championship.service';

@Module({
  controllers: [ChampionshipController],
  providers: [ChampionshipService, PrismaService]
})
export class ChampionshipModule {}

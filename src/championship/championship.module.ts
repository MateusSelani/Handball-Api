import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrismaService } from './../prisma/prisma.service';
import { ChampionshipController } from './championship.controller';
import { ChampionshipService } from './championship.service';
import { Championship } from './entities/championship.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Championship])],
  controllers: [ChampionshipController],
  providers: [ChampionshipService, PrismaService]
})
export class ChampionshipModule {}

import { Module } from '@nestjs/common';
import { AdressModule } from './adress/adress.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChampionshipModule } from './championship/championship.module';
import { ClassificationModule } from './classification/classification.module';
import { MatchModule } from './match/match.module';
import { PlayerModule } from './player/player.module';
import { PrismaService } from './prisma/prisma.service';
import { StadiumModule } from './stadium/stadium.module';
import { TeamModule } from './team/team.module';

@Module({
  imports: [
    PlayerModule,
    TeamModule,
    StadiumModule,
    AdressModule,
    MatchModule,
    ChampionshipModule,
    ClassificationModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}

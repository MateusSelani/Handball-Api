import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeamModule } from './team/team.module';
import { StadiumModule } from './stadium/stadium.module';
import { AdressModule } from './adress/adress.module';
import { MatchModule } from './match/match.module';
import { TableModule } from './table/table.module';
import { ChampionshipModule } from './championship/championship.module';
import { PlayerModule } from './player/player.module';

@Module({
  imports: [PlayerModule, TeamModule, StadiumModule, AdressModule, MatchModule, TableModule, ChampionshipModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

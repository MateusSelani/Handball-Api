import { Adress } from './adress/entities/adress.entity';
import { Championship } from './championship/entities/championship.entity';
import { Stadium } from './stadium/entities/stadium.entity';
import { Team } from './team/entities/team.entity';
import { Player } from './player/entities/player.entity';
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
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'nestjs',
    entities: [Player, Team, Stadium, Championship, Adress],
    synchronize: true,
  }), PlayerModule, TeamModule, StadiumModule, AdressModule, MatchModule, TableModule, ChampionshipModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdressModule } from './adress/adress.module';
import { Adress } from './adress/entities/adress.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChampionshipModule } from './championship/championship.module';
import { Championship } from './championship/entities/championship.entity';
import { ClassificationModule } from './classification/classification.module';
import { Classification } from './classification/entities/classification.entity';
import { Match } from './match/entities/match.entity';
import { MatchModule } from './match/match.module';
import { Player } from './player/entities/player.entity';
import { PlayerModule } from './player/player.module';
import { PrismaServiceModule } from './prisma.service/prisma.service.module';
import { PrismaServiceService } from './prisma.service/prisma.service.service';
import { Stadium } from './stadium/entities/stadium.entity';
import { StadiumModule } from './stadium/stadium.module';
import { Team } from './team/entities/team.entity';
import { TeamModule } from './team/team.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'nestjs',
    entities: [Player, Team, Stadium, Championship, Adress, Match, Classification],
    synchronize: true,
  }), PlayerModule, TeamModule, StadiumModule, AdressModule, MatchModule, ChampionshipModule, ClassificationModule, PrismaServiceModule],
  controllers: [AppController],
  providers: [AppService, PrismaServiceService, PrismaService],
})
export class AppModule {}

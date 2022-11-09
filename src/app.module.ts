import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
//   imports: [TypeOrmModule.forRoot({
//     type: 'postgres',
//     host: 'localhost',
//     port: 5432,
//     username: 'postgres',
//     password: 'root',
//     database: 'nestjs',
//     entities: [Player, Team, Stadium, Championship, Adress, Match, Classification],
//     synchronize: true,
//   }), PlayerModule, TeamModule, StadiumModule, AdressModule, MatchModule, ChampionshipModule, ClassificationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

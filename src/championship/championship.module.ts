import { Classification } from './../classification/entities/classification.entity';
import { Championship } from './entities/championship.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ChampionshipService } from './championship.service';
import { ChampionshipController } from './championship.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Championship])],
  controllers: [ChampionshipController],
  providers: [ChampionshipService]
})
export class ChampionshipModule {}

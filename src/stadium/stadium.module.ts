import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrismaService } from './../prisma/prisma.service';
import { Stadium } from './entities/stadium.entity';
import { StadiumController } from './stadium.controller';
import { StadiumService } from './stadium.service';

@Module({
  imports: [TypeOrmModule.forFeature([Stadium])],
  controllers: [StadiumController],
  providers: [StadiumService, PrismaService]
})
export class StadiumModule {}

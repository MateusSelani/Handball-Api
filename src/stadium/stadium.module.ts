import { Module } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { StadiumRepository } from './repositories/stadium.repository';
import { StadiumController } from './stadium.controller';
import { StadiumService } from './stadium.service';

@Module({
  controllers: [StadiumController],
  providers: [StadiumService, PrismaService, StadiumRepository]
})
export class StadiumModule {}

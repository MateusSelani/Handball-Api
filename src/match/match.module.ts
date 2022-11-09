import { Module } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { MatchController } from './match.controller';
import { MatchService } from './match.service';
import { MatchRepository } from './repositories/match.repository';

@Module({
  controllers: [MatchController],
  providers: [MatchService, PrismaService, MatchRepository]
})
export class MatchModule {}

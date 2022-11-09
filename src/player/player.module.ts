import { Module } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { PlayerController } from './player.controller';
import { PlayerService } from './player.service';
import { PlayerRepository } from './repositories/player.repository';

@Module({
  controllers: [PlayerController],
  providers: [PlayerService, PrismaService, PlayerRepository]
})
export class PlayerModule {}

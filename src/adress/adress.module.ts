import { Module } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { AdressController } from './adress.controller';
import { AdressService } from './adress.service';

@Module({
  controllers: [AdressController],
  providers: [AdressService, PrismaService]
})
export class AdressModule {}

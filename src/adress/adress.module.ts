import { Module } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { AdressController } from './adress.controller';
import { AdressService } from './adress.service';
import { AdressRepository } from './repositories/adress.repository';

@Module({
  controllers: [AdressController],
  providers: [AdressService, PrismaService, AdressRepository]
})
export class AdressModule {}

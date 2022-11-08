import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrismaService } from './../prisma/prisma.service';
import { AdressController } from './adress.controller';
import { AdressService } from './adress.service';
import { Adress } from './entities/adress.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Adress])],
  controllers: [AdressController],
  providers: [AdressService, PrismaService]
})
export class AdressModule {}

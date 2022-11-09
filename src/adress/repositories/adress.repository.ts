import { Injectable } from '@nestjs/common';
import { PrismaService } from './../../prisma/prisma.service';

@Injectable()
export class AdressRepository {
  constructor(private readonly prisma: PrismaService) {}

  // methods prisma crud or cli

  // create(createAdressDto: CreateAdressDto) {
  //   this.ar.save(createAdressDto);
  //   return createAdressDto;
  // }

  // findAll() {
  //   return this.ar.find();
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} adress`;
  // }

  // update(id: string, updateAdressDto: UpdateAdressDto) {
  //   const adress = this.ar.preload({
  //     idAdress: id,
  //     ...updateAdressDto,
  //   });
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} adress`;
  // }
}

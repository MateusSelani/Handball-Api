import { Injectable } from '@nestjs/common';
import { AdressRepository } from './repositories/adress.repository';

@Injectable()
export class AdressService {
  constructor(private readonly pr: AdressRepository) {}

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

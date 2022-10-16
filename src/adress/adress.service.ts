import { Repository } from 'typeorm/repository/Repository';
import { Adress } from './entities/adress.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAdressDto } from './dto/create-adress.dto';
import { UpdateAdressDto } from './dto/update-adress.dto';

@Injectable()
export class AdressService {

  constructor(@InjectRepository(Adress)
    private readonly ar : Repository<Adress>) {}

  create(createAdressDto: CreateAdressDto) {
    this.ar.save(createAdressDto);
    return createAdressDto;
  }

  findAll() {
    return this.ar.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} adress`;
  // }

  update(id: string, updateAdressDto: UpdateAdressDto) {
    const adress = this.ar.preload({
      idAdress: id,
      ...updateAdressDto,
    });
  }

  // remove(id: number) {
  //   return `This action removes a #${id} adress`;
  // }
}

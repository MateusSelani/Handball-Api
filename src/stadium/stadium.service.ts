import { Injectable } from '@nestjs/common';
import { CreateStadiumDto } from './dto/create-stadium.dto';
import { UpdateStadiumDto } from './dto/update-stadium.dto';
import { StadiumRepository } from './repositories/stadium.repository';

@Injectable()
export class StadiumService {
  constructor(private readonly sr: StadiumRepository) {}

  create(dto: CreateStadiumDto) {
    return this.sr.save(dto);
  }

  findAll() {
    return this.sr.findAll();
  }

  findOne(id: string) {
    return this.sr.findOne(id);
  }

  update(id: string, dto: UpdateStadiumDto) {
    return this.sr.update(id, dto);
  }

  remove(id: string) {
    return this.sr.remove(id);
  }
}

import { Injectable } from '@nestjs/common';
import { CreateChampionshipDto } from './dto/create-championship.dto';
import { UpdateChampionshipDto } from './dto/update-championship.dto';
import { ChampionshipRepository } from './repositories/championship.repository';

@Injectable()
export class ChampionshipService {
  constructor(private readonly cr: ChampionshipRepository) {}

  create(dto: CreateChampionshipDto) {
    this.cr.save(dto);
    return dto;
  }

  findAll() {
    return this.cr.findAll();
  }

  findOne(id: string) {
    return this.cr.findOne(id);
  }

  async update(id: string, dto: UpdateChampionshipDto) {
    return this.cr.update(id, dto);
  }

  remove(id: string) {
    return this.cr.remove(id);
  }
}

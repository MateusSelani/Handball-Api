import { Injectable } from '@nestjs/common';
import { CreateChampionshipDto } from './dto/create-championship.dto';
import { UpdateChampionshipDto } from './dto/update-championship.dto';
import { ChampionshipRepository } from './repositories/championship.repository';

@Injectable()
export class ChampionshipService {
  constructor(private readonly cr: ChampionshipRepository) {}

  async create(dto: CreateChampionshipDto) {
    return await this.cr.save(dto);
  }

  findAll() {
    return this.cr.findAll();
  }

  async findOne(id: string) {
    return await this.cr.findOne(id);
  }

  async update(id: string, dto: UpdateChampionshipDto) {
    return this.cr.update(id, dto);
  }

  async remove(id: string) {
    return await this.cr.remove(id);
  }
}

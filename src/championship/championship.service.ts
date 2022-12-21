import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common';
import { CreateChampionshipDto } from './dto/create-championship.dto';
import { UpdateChampionshipDto } from './dto/update-championship.dto';
import { ChampionshipRepository } from './repositories/championship.repository';

@Injectable()
export class ChampionshipService {
  constructor(private readonly cr: ChampionshipRepository) {}

  async create(dto: CreateChampionshipDto) {
    const champ = await this.cr.save(dto);
    if (champ) {
      return champ;
    } else {
      throw new BadRequestException('Championship not created!');
    }
  }

  findAll() {
    return this.cr.findAll();
  }

  async findOne(id: string) {
    const champ = await this.cr.findOne(id);
    if (champ) {
      return champ;
    } else {
      throw new NotFoundException(`Championship ${id} not found`);
    }
  }

  async update(id: string, dto: UpdateChampionshipDto) {
    const champ = await this.cr.update(id, dto);
    if (champ) {
      return champ
    } else {
      throw new NotFoundException(`Championship ${id} not found`);
    }
  }

  async remove(id: string) {
    const champ = await this.cr.findOne(id);
    if (champ) {
      await this.cr.remove(id);
      return `${id} deleted!`
    } else {
      throw new NotFoundException(`Championship ${id} not found`);
    }
  }
}

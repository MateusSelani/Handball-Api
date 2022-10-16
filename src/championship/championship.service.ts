import { Repository } from 'typeorm/repository/Repository';
import { Championship } from './entities/championship.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateChampionshipDto } from './dto/create-championship.dto';
import { UpdateChampionshipDto } from './dto/update-championship.dto';

@Injectable()
export class ChampionshipService {

  constructor(@InjectRepository(Championship)
    private readonly cr : Repository<Championship>) {}

  create(createChampionshipDto: CreateChampionshipDto) {
    this.cr.save(createChampionshipDto);
    return createChampionshipDto;
  }

  findAll() {
    return this.cr.find();
  }

  async findOne(id: string) {
    const champ = await this.cr.findOneBy({idChampionship: id});
    if (champ) {
      return champ;
    } else {
      throw new NotFoundException(`Championship ${id} not found`);
    }
  }

  async update(id: string, updateChampionshipDto: UpdateChampionshipDto) {
    const champ = await this.cr.preload({
      idChampionship: id,
      ...updateChampionshipDto,
    });
    if (champ) {
      this.cr.save(champ);
      return champ;
    } else {
      throw new NotFoundException(`Championship ${id} not found`);
    }
  }

  async remove(id: string) {
    const champ = await this.cr.findOneBy({idChampionship: id});
    if (champ) {
      return this.cr.delete(id);
    } else {
      throw new NotFoundException(`Championship ${id} not found`);
    }
  }
}

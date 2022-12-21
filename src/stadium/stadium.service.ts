import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common';
import { CreateStadiumDto } from './dto/create-stadium.dto';
import { UpdateStadiumDto } from './dto/update-stadium.dto';
import { StadiumRepository } from './repositories/stadium.repository';

@Injectable()
export class StadiumService {
  constructor(private readonly sr: StadiumRepository) {}

  async create(dto: CreateStadiumDto) {
    const stadium = await this.sr.save(dto);
    if (stadium) {
      return dto;
    } else {
      throw new BadRequestException('Stadium not created!');
    }
  }

  findAll() {
    return this.sr.findAll();
  }

  findAllWithAdress() {
    return this.sr.findAllWithAdress();
  }

  async findOne(id: string) {
    const stadium = await this.sr.findOne(id);

    if (stadium) {
      return stadium;
    } else {
      throw new NotFoundException(`Stadium ${id} not found`);
    }
  }

  async update(id: string, dto: UpdateStadiumDto) {
    const stadium = await this.sr.findOne(id);
    if (stadium) {
      this.sr.update(id, dto);
      return dto;
    } else {
      throw new NotFoundException(`Stadium ${id} not found!`);
    }
  }

  async remove(id: string) {
    const stadium = await this.sr.findOne(id);
    if (stadium) {
      await this.sr.remove(id);
      return `${id} deleted!`
    } else {
      throw new NotFoundException(`Stadium ${id} not found!`);
    }
  }
}

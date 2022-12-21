import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { PlayerRepository } from './repositories/player.repository';

@Injectable()
export class PlayerService {
  constructor(private readonly pr: PlayerRepository) {}

  create(dto: CreatePlayerDto) {
    const player = this.pr.save(dto);
    if (player) {
      return player;
    } else {
      throw new BadRequestException('Player not created!');
    }
  }

  findAll() {
    return this.pr.findAll();
  }

  async findOne(id: string) {
    const player = await this.pr.findOne(id);
    if (player) {
      return player;
    } else {
      return new NotFoundException(`Player ${id} not found`);
    }
  }

  async update(id: string, dto: UpdatePlayerDto) {
    const player = await this.pr.findOne(id);
    if (player) {
      await this.pr.update(id, dto);
      return player;
    } else {
      throw new NotFoundException(`Player ${id} not found`);
    }
  }

  async remove(id: string) {
    if (id) {
      return await this.pr.remove(id);
    } else {
      throw new NotFoundException(`Player ${id} not found`);
    }
  }
}

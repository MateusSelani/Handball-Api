import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { PlayerRepository } from './repositories/player.repository';

@Injectable()
export class PlayerService {
  constructor(private readonly pr: PlayerRepository) {}

  create(dto: CreatePlayerDto) {
    return this.pr.save(dto);
  }

  findAll() {
    return this.pr.findAll();
  }

  findOne(id: string) {
    return this.pr.findOne(id);
  }

  update(id: string, dto: UpdatePlayerDto) {
    return this.pr.update(id, dto);
  }

  async remove(id: string) {
    return this.pr.remove(id);
  }
}

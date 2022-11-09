import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { TeamRepository } from './repositories/team.repository';

@Injectable()
export class TeamService {
  constructor(private tr: TeamRepository) {}

  create(dto: CreateTeamDto) {
    return this.tr.save(dto);
  }

  findAll() {
    return this.tr.findAll();
  }

  async findOne(id: string) {
    return this.tr.findOne(id);
  }

  async update(id: string, dto: UpdateTeamDto) {
    return this.tr.update(id, dto);
  }

  async remove(id: string) {
    return this.tr.remove(id);
  }
}

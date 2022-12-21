import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { TeamRepository } from './repositories/team.repository';

@Injectable()
export class TeamService {
  constructor(private tr: TeamRepository) {}

  async create(dto: CreateTeamDto) {
    const team = await this.tr.save(dto);
    if (team) {
      return team;
    } else {
      throw new BadRequestException('Team not created!');
    }
  }

  findAll() {
    return this.tr.findAll();
  }

  async findOne(id: string) {
    const team = this.tr.findOne(id);
    if (team) {
      return team;
    } else {
      throw new NotFoundException(`Team ${id} not found`);
    }
  }

  async update(id: string, dto: UpdateTeamDto) {
    const team = await this.tr.findOne(id);
    if (team) {
      return await this.tr.update(id, dto);
    } else {
      throw new NotFoundException('Team not found!');
    }
  }

  async remove(id: string) {
    const team = await this.findOne(id);
    if (team) {
      await this.tr.remove(id);
      return `${id} deleted!`;
    } else {
      throw new NotFoundException(`Team ${id} not found`);
    }
  }
}

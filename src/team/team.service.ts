import { Repository } from 'typeorm/repository/Repository';
import { Team } from './entities/team.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';

@Injectable()
export class TeamService {
  
  constructor(@InjectRepository(Team)
    private readonly tr : Repository<Team>) {}

  create(createTeamDto: CreateTeamDto) {
    this.tr.save(createTeamDto);
    return createTeamDto;
  }

  findAll() {
    return this.tr.find();
  }

  async findOne(id: string) {
    const team = await this.tr.findOneBy({idTeam : id});
    if (team) {
        return team;
    } else {
        throw new NotFoundException(`Team ${id} not found`)
    }
  }

  async update(id: string, updateTeamDto: UpdateTeamDto) {
    const team = await this.tr.preload({
      idTeam: id,
      ...updateTeamDto,
    });
    if (team) {
        this.tr.save(team);
        return updateTeamDto;
    } else {
        throw new NotFoundException(`Team ${id} not found`);
    }
  }

  async remove(id: string) {
    const team = await this.tr.findOneBy({idTeam : id});
    if (team) {
        return this.tr.delete(team.idTeam);
    } else {
        throw new NotFoundException(`Team ${id} not found`);
    }
  }
}

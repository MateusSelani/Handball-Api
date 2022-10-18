import { Repository } from 'typeorm/repository/Repository';
import { Match } from './entities/match.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';

@Injectable()
export class MatchService {
  constructor(@InjectRepository(Match)
    private readonly mr: Repository<Match>) {}

  create(createMatchDto: CreateMatchDto) {
    return 'ok';
  }

  createMatches(){
    let teams = [];
    teams = ["time1","time2","time3"];
    this.matchsGenerator(teams);
    return "ok";
  }

  findAll() {
    return this.mr.find();
  }

  findOne(id: string) {
    const match = this.mr.findOneBy({idMatch: id});
    if (match) {
      return match;
    } else {
      throw new NotFoundException(`The match #${id} not found`);
    }
  }

  update(id: number, updateMatchDto: UpdateMatchDto) {
    return `This action updates a #${id} match`;
  }

  remove(id: number) {
    return `This action removes a #${id} match`;
  }

  private matchsGenerator(teams: string[]) {
    teams.forEach(homeTeam => {
      let place = "estadio do time da casa";
      teams.forEach(visitingTeam => {
        if (homeTeam != visitingTeam) {
          let match = (`${homeTeam} vs ${visitingTeam} date: ${this.randomDate(2010,3,11)} stadium: ${place}`);
          console.log(match); // save
        }
      });
    });
  }

  private randomDate(year: number, monthStart: number, monthEnd: number) {
    monthEnd += 1;
    let randomMonth = Math.floor(Math.random() * (monthStart - monthEnd)) + monthEnd;
    let randomDay = Math.floor(Math.random() * 30) + 1;
    let date = `${randomDay}/${randomMonth}/${year}`;
    return date;
  }

}

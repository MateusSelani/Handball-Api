import { UpdateAdressDto } from './../adress/dto/update-adress.dto';
import { ClassSerializerInterceptor, Get, Injectable, NotFoundException, UseInterceptors } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, SelectQueryBuilder } from 'typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Player } from './entities/player.entity';

@Injectable()
export class PlayerService {
  
  constructor(@InjectRepository(Player) 
    private readonly pr : Repository<Player>) { }
  
  create(createPlayerDto: CreatePlayerDto) {
    this.pr.save(createPlayerDto);
    return createPlayerDto;
  }

  findAll() {
    return this.pr.find();
  }

  findOne(id: string) {
    const player = this.pr.findOneBy({idPlayer: id});
    if (!player) {
      return new NotFoundException(`Player ${id} not found`);
    } else {
      return player;
    }
  }

  async update(id: string, updatePlayerDto: UpdatePlayerDto) {
    //const player = await this.pr.preload({
    //  idPlayer: id,
    //  ...updatePlayerDto,
    //});
    const player = await this.pr.findOneBy({idPlayer: id});
    player.namePlayer = updatePlayerDto.namePlayer;
    player.genderPlayer = updatePlayerDto.genderPlayer;
    player.isActivePlayer = updatePlayerDto.isActivePlayer;
    //console.log(player);
    if (!player) {
      throw new NotFoundException(`Player ${id} not found`);
    }
    this.pr.save(player);
    return updatePlayerDto;
  }

  remove(id: string) {
    const player = this.findOne(id);
    if(!player){
      throw new NotFoundException(`Player ${id} not found`);
    } else {
        this.pr.delete(id);
        return `Player ${id} deleted`;
    }
  }
}

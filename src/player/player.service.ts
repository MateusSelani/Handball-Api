import { Injectable } from '@nestjs/common';
import { PlayerRepository } from './repositories/player.repository';

@Injectable()
export class PlayerService {
  constructor(private readonly pr: PlayerRepository) {}
  
  // create(createPlayerDto: CreatePlayerDto) {
  //   this.pr.save(createPlayerDto);
  //   return createPlayerDto;
  // }

  // findAll() {
  //   return this.pr.find();
  // }

  // async findOne(id: string) {
  //   const player = await this.pr.findOneBy({idPlayer: id});
  //   if (player) {
  //       return player;
  //   } else {
  //       return new NotFoundException(`Player ${id} not found`);
  //   }
  // }

  // async update(id: string, updatePlayerDto: UpdatePlayerDto) {
  //   const player = await this.pr.preload({
  //     idPlayer: id,
  //     ...updatePlayerDto,
  //   });
  //   if (player) {
  //       this.pr.save(player);
  //       return updatePlayerDto;
  //   } else {
  //       throw new NotFoundException(`Player ${id} not found`);
  //   }
  // }

  // async remove(id: string) {
  //   const player = await this.pr.findOneBy({idPlayer: id});
  //   if (player) {
  //       return this.pr.delete(player.idPlayer);
  //   } else {
  //       return new NotFoundException(`Player ${id} not found`);
  //   }
  // }
}

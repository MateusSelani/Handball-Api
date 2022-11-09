import { Injectable } from '@nestjs/common';
import { ChampionshipRepository } from './repositories/championship.repository';

@Injectable()
export class ChampionshipService {
  constructor(private readonly cr: ChampionshipRepository) {}

  // create(createChampionshipDto: CreateChampionshipDto) {
  //   this.cr.save(createChampionshipDto);
  //   return createChampionshipDto;
  // }

  // findAll() {
  //   return this.cr.find();
  // }

  // async findOne(id: string) {
  //   const champ = await this.cr.findOneBy({idChampionship: id});
  //   if (champ) {
  //     return champ;
  //   } else {
  //     throw new NotFoundException(`Championship ${id} not found`);
  //   }
  // }

  // async update(id: string, updateChampionshipDto: UpdateChampionshipDto) {
  //   const champ = await this.cr.preload({
  //     idChampionship: id,
  //     ...updateChampionshipDto,
  //   });
  //   if (champ) {
  //     this.cr.save(champ);
  //     return champ;
  //   } else {
  //     throw new NotFoundException(`Championship ${id} not found`);
  //   }
  // }

  // async remove(id: string) {
  //   const champ = await this.cr.findOneBy({idChampionship: id});
  //   if (champ) {
  //     return this.cr.delete(id);
  //   } else {
  //     throw new NotFoundException(`Championship ${id} not found`);
  //   }
  // }
}

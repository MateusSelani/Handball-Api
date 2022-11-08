import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StadiumService {
  constructor(private prisma: PrismaService) {}
  // constructor(@InjectRepository(Stadium)
  //   private readonly sr : Repository<Stadium>) {}

  // create(createStadiumDto: CreateStadiumDto) {
  //   this.sr.save(createStadiumDto);
  //   return createStadiumDto;
  // }

  // findAll() {
  //   return this.sr.find();
  // }

  // async findOne(id: string) { // falta async await
  //   const stadium = await this.sr.findOneBy({idStadium: id});
  //   if (stadium) {
  //       return stadium;
  //   } else {
  //       throw new NotFoundException(`Stadium ${id} not found`);
  //   }
  // }

  // async update(id: string, updateStadiumDto: UpdateStadiumDto) {
  //   const stadium = await this.sr.preload({
  //     idStadium: id,
  //     ...updateStadiumDto,
  //   })
  //   if (stadium) {
  //       this.sr.save(stadium);
  //       return updateStadiumDto;
  //   } else {
  //       throw new NotFoundException(`Stadium ${id} not found`);
  //   }
  // }

  // async remove(id: string) {
  //   const stadium = await this.sr.findOneBy({idStadium: id});
  //   if (stadium) {
  //       return this.sr.delete(stadium.idStadium);
  //   } else {
  //       throw new NotFoundException(`Stadium ${id} not found`);
  //   }
  // }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TeamService {
  constructor(private prisma: PrismaService) {}
  // constructor(@InjectRepository(Team)
  //   private readonly tr : Repository<Team>) {}

  // create(createTeamDto: CreateTeamDto) {
  //   this.tr.save(createTeamDto);
  //   return createTeamDto;
  // }

  // findAll() {
  //   return this.tr.find();
  // }

  // async findOne(id: string) {
  //   const team = await this.tr.findOneBy({idTeam : id});
  //   if (team) {
  //       return team;
  //   } else {
  //       throw new NotFoundException(`Team ${id} not found`)
  //   }
  // }

  // async update(id: string, updateTeamDto: UpdateTeamDto) {
  //   const team = await this.tr.preload({
  //     idTeam: id,
  //     ...updateTeamDto,
  //   });
  //   if (team) {
  //       this.tr.save(team);
  //       return updateTeamDto;
  //   } else {
  //       throw new NotFoundException(`Team ${id} not found`);
  //   }
  // }

  // async remove(id: string) {
  //   const team = await this.tr.findOneBy({idTeam : id});
  //   if (team) {
  //       return this.tr.delete(team.idTeam);
  //   } else {
  //       throw new NotFoundException(`Team ${id} not found`);
  //   }
  // }
}

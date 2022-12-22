import { Context } from 'src/context';

interface Team {
  idTeam: string;
  nameTeam: string;
  idHome: string;
}

export async function createTeam(team: Team, ctx: Context) {
  if (team) {
    return await ctx.prisma.team.create({
      data: {
        idTeam: team.idTeam,
        nameTeam: team.nameTeam,
        idHome: team.idHome,
      },
    });
  } else {
    return new Error('Team must accept terms!');
  }
}

export async function findAllTeam(ctx: Context) {
  const team = await ctx.prisma.team.findMany();
  if (team) {
    return team;
  } else {
    return new Error('Team not found!');
  }
}

export async function findOneTeam(idTeam: string, ctx: Context) {
  const team = await ctx.prisma.team.findUnique({
    where: { idTeam },
  });
  if (team) {
    return team;
  } else {
    return new Error('Team not found!');
  }
}

export async function updateTeam(team: Team, ctx: Context) {
  if (team) {
    return await ctx.prisma.team.update({
      where: { idTeam: team.idTeam },
      data: {
        idTeam: team.idTeam,
        nameTeam: team.nameTeam,
        idHome: team.idHome,
      },
    });
  } else {
    return new Error('Team must accept terms!');
  }
}

export async function deleteTeam(idTeam: string, ctx: Context) {
  if (idTeam) {
    await ctx.prisma.team.delete({
      where: { idTeam },
    });
    return 'Ok!';
  } else {
    return new Error('Team not found!');
  }
}

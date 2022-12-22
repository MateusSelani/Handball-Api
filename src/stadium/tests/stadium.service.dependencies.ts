import { Context } from 'src/context';

interface Stadium {
  idStadium: string;
  nameStadium: string;
  idAdress: string;
}

export async function createStadium(stadium: Stadium, ctx: Context) {
  if (stadium) {
    return await ctx.prisma.stadium.create({
      data: {
        idStadium: stadium.idStadium,
        nameStadium: stadium.nameStadium,
        idAdress: stadium.idAdress,
      },
    });
  } else {
    return new Error('Stadium must accept terms!');
  }
}

export async function findAllStadium(ctx: Context) {
  const stadium = await ctx.prisma.stadium.findMany();
  if (stadium) {
    return stadium;
  } else {
    return new Error('Stadium not found!');
  }
}

export async function findOneStadium(idStadium: string, ctx: Context) {
  const stadium = await ctx.prisma.stadium.findUnique({
    where: { idStadium },
  });
  if (stadium) {
    return stadium;
  } else {
    return new Error('Stadium not found!');
  }
}

export async function updateStadium(stadium: Stadium, ctx: Context) {
  if (stadium) {
    return await ctx.prisma.stadium.update({
      where: { idStadium: stadium.idStadium },
      data: {
        idStadium: stadium.idStadium,
        nameStadium: stadium.nameStadium,
        idAdress: stadium.idAdress,
      },
    });
  } else {
    return new Error('Stadium must accept terms!');
  }
}

export async function deleteStadium(idStadium: string, ctx: Context) {
  if (idStadium) {
    await ctx.prisma.stadium.delete({
      where: { idStadium },
    });
    return 'Ok!';
  } else {
    return new Error('Stadium not found!');
  }
}

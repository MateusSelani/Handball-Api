import { Context } from 'src/context';

interface CreateChampionship {
  idChampionship: string;
  nameChampionship: string;
  yearChampionship: number;
}

export async function createChampionship(
  champ: CreateChampionship,
  ctx: Context,
) {
  if (champ) {
    return await ctx.prisma.championship.create({
      data: champ,
    });
  } else {
    return new Error('Championship must accept terms!');
  }
}

export async function findAllChampionship(ctx: Context) {
  const champ = await ctx.prisma.championship.findMany();
  if (champ) {
    return champ;
  } else {
    return new Error('Championship not found!');
  }
}

export async function findOneChampionship(
  idChampionship: string,
  ctx: Context,
) {
  const champ = await ctx.prisma.championship.findUnique({
    where: { idChampionship },
  });
  if (champ) {
    return champ;
  } else {
    return new Error('Championship not found!');
  }
}

interface UpdateChampionship {
  idChampionship: string;
  nameChampionship: string;
  yearChampionship: number;
}

export async function updateChampionship(
  champ: UpdateChampionship,
  ctx: Context,
) {
  if (champ) {
    return await ctx.prisma.championship.update({
      where: { idChampionship: champ.idChampionship },
      data: champ,
    });
  } else {
    return new Error('Championship must accept terms!');
  }
}

export async function deleteChampionship(idChampionship: string, ctx: Context) {
  if (idChampionship) {
    await ctx.prisma.championship.delete({
      where: { idChampionship},
    });
    return 'Ok!';
  } else {
    return new Error('Championship not found!');
  }
}

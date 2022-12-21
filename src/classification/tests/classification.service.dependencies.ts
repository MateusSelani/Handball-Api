import { Context } from 'src/context';

interface CreateClassification {
  idClassification: string;
  pointsTeam: number;
  goalDifference: number;
  idChampionship: string;
  idTeam: string;
}

export async function CreateClassification(
  classif: CreateClassification,
  ctx: Context,
) {
  if (classif) {
    return await ctx.prisma.classification.create({
      data: classif,
    });
  } else {
    return new Error('Classification must accept terms!');
  }
}

export async function findAllClassification(ctx: Context) {
  const classif = await ctx.prisma.championship.findMany();
  if (classif) {
    return classif;
  } else {
    return new Error('Championship not found!');
  }
}

export async function findOneClassification(
  idClassification: string,
  ctx: Context,
) {
  const classif = await ctx.prisma.classification.findUnique({
    where: { idClassification },
  });
  if (classif) {
    return classif;
  } else {
    return new Error('Classification not found!');
  }
}

interface UpdateClassification {
  idClassification: string;
  pointsTeam: number;
  goalDifference: number;
  idChampionship: string;
  idTeam: string;
}

export async function updateClassification(
  classif: UpdateClassification,
  ctx: Context,
) {
  if (classif) {
    return await ctx.prisma.classification.update({
      where: { idClassification: classif.idClassification },
      data: classif,
    });
  } else {
    return new Error('Adress must accept terms!');
  }
}

export async function deleteClassification(idClassification: string, ctx: Context) {
  if (idClassification) {
    await ctx.prisma.classification.delete({
      where: { idClassification },
    });
    return 'Ok!';
  } else {
    return new Error('Classification not found!');
  }
}

import { Context } from 'src/context';

interface CreateAdress {
  idAdress: string;
  street: string;
}

export async function createAdress(adress: CreateAdress, ctx: Context) {
  if (adress) {
    return await ctx.prisma.adress.create({
      data: adress,
    });
  } else {
    return new Error('Adress must accept terms!');
  }
}

interface UpdateAdress {
  idAdress: string;
  street: string;
}

export async function updateAdress(adress: UpdateAdress, ctx: Context) {
  if (adress) {
    return await ctx.prisma.adress.update({
      where: { idAdress: adress.idAdress },
      data: adress,
    });
  } else {
    return new Error('Adress must accept terms!');
  }
}

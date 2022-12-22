import { Context } from 'src/context';

interface Adress {
  idAdress: string;
  street: string;
}

export async function createAdress(adress: Adress, ctx: Context) {
  if (adress) {
    return await ctx.prisma.adress.create({
      data: adress,
    });
  } else {
    return new Error('Adress must accept terms!');
  }
}

export async function updateAdress(adress: Adress, ctx: Context) {
  if (adress) {
    return await ctx.prisma.adress.update({
      where: { idAdress: adress.idAdress },
      data: adress,
    });
  } else {
    return new Error('Adress must accept terms!');
  }
}

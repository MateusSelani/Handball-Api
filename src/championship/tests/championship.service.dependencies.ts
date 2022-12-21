import { Context } from 'src/context';

interface CreateChampionship {
  idChampionship: string;
  nameChampionship: string;
  yearChampionship: number;
}

export async function createChampionship(champ: CreateChampionship, ctx: Context) {
  if (champ) {
    return await ctx.prisma.championship.create({
      data: champ,
    });
  } else {
    return new Error('Championship must accept terms!');
  }
}

// interface UpdateChampionship {
//   nameChampionship: string;
//   yearChampionship: number;
// }

// export async function updateChampionship(adress: UpdateChampionship, ctx: Context) {
//   if (adress) {
//     return await ctx.prisma.adress.update({
//       where: { idAdress: adress.idAdress },
//       data: adress,
//     });
//   } else {
//     return new Error('Adress must accept terms!');
//   }
// }

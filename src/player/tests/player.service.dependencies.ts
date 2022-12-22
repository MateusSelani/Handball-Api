import { Context } from 'src/context';

interface CreatePlayer {
  idPlayer: string;
  namePlayer: string;
  genderPlayer: string;
  isActivePlayer: boolean;
}

export async function createPlayer(
  player: CreatePlayer,
  ctx: Context,
) {
  if (player) {
    return await ctx.prisma.player.create({
      data: player,
    });
  } else {
    return new Error('Player must accept terms!');
  }
}

export async function findAllPlayer(ctx: Context) {
  const player = await ctx.prisma.player.findMany();
  if (player) {
    return player;
  } else {
    return new Error('Player not found!');
  }
}

export async function findOnePlayer(
  idPlayer: string,
  ctx: Context,
) {
  const player = await ctx.prisma.player.findUnique({
    where: { idPlayer },
  });
  if (player) {
    return player;
  } else {
    return new Error('Player not found!');
  }
}

interface UpdatePlayer {
  idPlayer: string;
  namePlayer: string;
  genderPlayer: string;
  isActivePlayer: boolean;
}

export async function updatePlayer(
  player: UpdatePlayer,
  ctx: Context,
) {
  if (player) {
    return await ctx.prisma.player.update({
      where: { idPlayer: player.idPlayer },
      data: player,
    });
  } else {
    return new Error('Player must accept terms!');
  }
}

export async function deletePlayer(idPlayer: string, ctx: Context) {
  if (idPlayer) {
    await ctx.prisma.player.delete({
      where: { idPlayer },
    });
    return 'Ok!';
  } else {
    return new Error('Player not found!');
  }
}

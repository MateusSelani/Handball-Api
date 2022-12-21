import { Context, createMockContext, MockContext } from '../context';
import { createPlayer, deletePlayer, findAllPlayer, findOnePlayer, updatePlayer } from './tests/player.service.dependencies';

let mockCtx: MockContext;
let ctx: Context;

beforeEach(() => {
  mockCtx = createMockContext();
  ctx = mockCtx as unknown as Context;
});

test('create - should pass', async () => {
  const player = {
    idPlayer: 'f5aec233-22da-474b-b17d-c05f5ff0a08b',
    namePlayer: 'John',
    genderPlayer: 'masc',
    isActivePlayer: true,
  };
  mockCtx.prisma.player.create.mockResolvedValue(player);

  await expect(createPlayer(player, ctx)).resolves.toEqual({
    idPlayer: 'f5aec233-22da-474b-b17d-c05f5ff0a08b',
    namePlayer: 'John',
    genderPlayer: 'masc',
    isActivePlayer: true,
  });
});

test('findall - should pass', async () => {
  mockCtx.prisma.player.findMany.getMockImplementation();

  await expect(findAllPlayer(ctx)).resolves.toEqual(
    Error('Player not found!'),
  );
});

test('findone - should pass', async () => {
  const id = 'f5aec233-22da-474b-b17d-c05f5ff0a08b';

  await expect(findOnePlayer(id, ctx)).resolves.toEqual(
    Error('Player not found!'),
  );
});

test('update - should pass', async () => {
  const player = {
    idPlayer: 'f5aec233-22da-474b-b17d-c05f5ff0a08b',
    namePlayer: 'John',
    genderPlayer: 'masc',
    isActivePlayer: true,
  };
  mockCtx.prisma.player.update.mockResolvedValue(player);

  await expect(updatePlayer(player, ctx)).resolves.toEqual({
    idPlayer: 'f5aec233-22da-474b-b17d-c05f5ff0a08b',
    namePlayer: 'John',
    genderPlayer: 'masc',
    isActivePlayer: true,
  });
});

test('deleted - should pass', async () => {
  const idPlayer = 'f5aec233-22da-474b-b17d-c05f5ff0a08b';

  await expect(deletePlayer(idPlayer, ctx)).resolves.toEqual('Ok!');
});

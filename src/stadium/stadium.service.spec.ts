import { Context, createMockContext, MockContext } from '../context';
import { createStadium, deleteStadium, findAllStadium, findOneStadium, updateStadium } from './tests/stadium.service.dependencies';

let mockCtx: MockContext;
let ctx: Context;

beforeEach(() => {
  mockCtx = createMockContext();
  ctx = mockCtx as unknown as Context;
});

test('create - should pass', async () => {
  const stadium = {
    idStadium: 'f5aec233-22da-474b-b17d-c05f5ff0a08b',
    nameStadium: 'Serra Dourada',
    idAdress: 'cca7e0fc-3ba4-4378-bcd7-99720a9e25ce',
  };
  mockCtx.prisma.stadium.create.mockResolvedValue(stadium);

  await expect(createStadium(stadium, ctx)).resolves.toEqual({
    idStadium: 'f5aec233-22da-474b-b17d-c05f5ff0a08b',
    nameStadium: 'Serra Dourada',
    idAdress: 'cca7e0fc-3ba4-4378-bcd7-99720a9e25ce',
  });
});

test('findall - should pass', async () => {
  mockCtx.prisma.stadium.findMany.getMockImplementation();

  await expect(findAllStadium(ctx)).resolves.toEqual(
    Error('Stadium not found!'),
  );
});

test('findone - should pass', async () => {
  const id = 'f5aec233-22da-474b-b17d-c05f5ff0a08b';

  await expect(findOneStadium(id, ctx)).resolves.toEqual(
    Error('Stadium not found!'),
  );
});

test('update - should pass', async () => {
  const stadium = {
    idStadium: 'f5aec233-22da-474b-b17d-c05f5ff0a08b',
    nameStadium: 'Serra Dourada',
    idAdress: 'cca7e0fc-3ba4-4378-bcd7-99720a9e25ce',
  };
  mockCtx.prisma.stadium.update.mockResolvedValue(stadium);

  await expect(updateStadium(stadium, ctx)).resolves.toEqual({
    idStadium: 'f5aec233-22da-474b-b17d-c05f5ff0a08b',
    nameStadium: 'Serra Dourada',
    idAdress: 'cca7e0fc-3ba4-4378-bcd7-99720a9e25ce',
  });
});

test('deleted - should pass', async () => {
  const idStadium = 'f5aec233-22da-474b-b17d-c05f5ff0a08b';

  await expect(deleteStadium(idStadium, ctx)).resolves.toEqual('Ok!');
});

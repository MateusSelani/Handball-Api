import { Context, createMockContext, MockContext } from '../context';
import {
  createChampionship,
  deleteChampionship,
  findAllChampionship,
  findOneChampionship
} from './tests/championship.service.dependencies';

let mockCtx: MockContext;
let ctx: Context;

beforeEach(() => {
  mockCtx = createMockContext();
  ctx = mockCtx as unknown as Context;
});

test('create - should pass', async () => {
  const champ = {
    idChampionship: 'f5aec233-22da-474b-b17d-c05f5ff0a08b',
    nameChampionship: 'Brasileirão test',
    yearChampionship: 2022,
  };
  mockCtx.prisma.championship.create.mockResolvedValue(champ);

  await expect(createChampionship(champ, ctx)).resolves.toEqual({
    idChampionship: 'f5aec233-22da-474b-b17d-c05f5ff0a08b',
    nameChampionship: 'Brasileirão test',
    yearChampionship: 2022,
  });
});

test('findall - should pass', async () => {
  mockCtx.prisma.championship.findMany.getMockImplementation();

  await expect(findAllChampionship(ctx)).resolves.toEqual(
    Error('Championship not found!'),
  );
});

test('findone - should pass', async () => {
  const id = 'f5aec233-22da-474b-b17d-c05f5ff0a08b';

  await expect(findOneChampionship(id, ctx)).resolves.toEqual(
    Error('Championship not found!'),
  );
});

test('update - should pass', async () => {
  const champ = {
    idChampionship: 'f5aec233-22da-474b-b17d-c05f5ff0a08b',
    nameChampionship: 'Europe league',
    yearChampionship: 2023,
  };
  mockCtx.prisma.championship.create.mockResolvedValue(champ);

  await expect(createChampionship(champ, ctx)).resolves.toEqual({
    idChampionship: 'f5aec233-22da-474b-b17d-c05f5ff0a08b',
    nameChampionship: 'Europe league',
    yearChampionship: 2023,
  });
});

test('deleted - should pass', async () => {
  const idChampionship = 'f5aec233-22da-474b-b17d-c05f5ff0a08b';

  await expect(deleteChampionship(idChampionship, ctx)).resolves.toEqual('Ok!');
});

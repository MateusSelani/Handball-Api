import { Context, createMockContext, MockContext } from '../context';
import { createChampionship } from './tests/championship.service.dependencies';

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
    yearChampionship: 2022
  });
});
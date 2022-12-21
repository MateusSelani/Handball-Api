import { Context, createMockContext, MockContext } from '../context';
import {
  createClassification, deleteClassification, findAllClassification, findOneClassification, updateClassification
} from './tests/classification.service.dependencies';

let mockCtx: MockContext;
let ctx: Context;

beforeEach(() => {
  mockCtx = createMockContext();
  ctx = mockCtx as unknown as Context;
});

test('create - should pass', async () => {
  const classif = {
    idClassification: 'f5aec233-22da-474b-b17d-c05f5ff0a08b',
    pointsTeam: 0,
    goalDifference: 0,
    idChampionship: '874232b8-35ff-4968-a760-7d15cc7a815d',
    idTeam: '6fc416a0-cfef-4234-8fbd-a4475fa97fb4',
  };
  mockCtx.prisma.classification.create.mockResolvedValue(classif);

  await expect(createClassification(classif, ctx)).resolves.toEqual({
    idClassification: 'f5aec233-22da-474b-b17d-c05f5ff0a08b',
    pointsTeam: 0,
    goalDifference: 0,
    idChampionship: '874232b8-35ff-4968-a760-7d15cc7a815d',
    idTeam: '6fc416a0-cfef-4234-8fbd-a4475fa97fb4',
  });
});

test('findall - should pass', async () => {
  mockCtx.prisma.classification.findMany.getMockImplementation();
  
  console.log(findAllClassification(ctx))
  await expect(findAllClassification(ctx)).resolves.toEqual(Error('Championship not found!'));
});

test('findone - should pass', async () => {
  const id = 'f5aec233-22da-474b-b17d-c05f5ff0a08b';

  await expect(findOneClassification(id, ctx)).resolves.toEqual(
    Error('Classification not found!'),
  );
});

test('update - should pass', async () => {
  const classif = {
    idClassification: 'f5aec233-22da-474b-b17d-c05f5ff0a08b',
    pointsTeam: 0,
    goalDifference: 0,
    idChampionship: '874232b8-35ff-4968-a760-7d15cc7a815d',
    idTeam: '6fc416a0-cfef-4234-8fbd-a4475fa97fb4',
  };
  mockCtx.prisma.classification.update.mockResolvedValue(classif);

  await expect(updateClassification(classif, ctx)).resolves.toEqual({
    idClassification: 'f5aec233-22da-474b-b17d-c05f5ff0a08b',
    pointsTeam: 0,
    goalDifference: 0,
    idChampionship: '874232b8-35ff-4968-a760-7d15cc7a815d',
    idTeam: '6fc416a0-cfef-4234-8fbd-a4475fa97fb4',
  });
});

test('deleted - should pass', async () => {
  const idChampionship = 'f5aec233-22da-474b-b17d-c05f5ff0a08b';

  await expect(deleteClassification(idChampionship, ctx)).resolves.toEqual('Ok!');
});

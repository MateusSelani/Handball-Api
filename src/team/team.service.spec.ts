import { Context, createMockContext, MockContext } from '../context';
import {
    createTeam,
    deleteTeam,
    findAllTeam,
    findOneTeam,
    updateTeam
} from './tests/team.service.dependencies';

let mockCtx: MockContext;
let ctx: Context;

beforeEach(() => {
  mockCtx = createMockContext();
  ctx = mockCtx as unknown as Context;
});

test('create - should pass', async () => {
  const team = {
    idTeam: 'f5aec233-22da-474b-b17d-c05f5ff0a08b',
    nameTeam: 'Vila Nova',
    idHome: 'cca7e0fc-3ba4-4378-bcd7-99720a9e25ce',
  };
  mockCtx.prisma.team.create.mockResolvedValue(team);

  await expect(createTeam(team, ctx)).resolves.toEqual({
    idTeam: 'f5aec233-22da-474b-b17d-c05f5ff0a08b',
    nameTeam: 'Vila Nova',
    idHome: 'cca7e0fc-3ba4-4378-bcd7-99720a9e25ce',
  });
});

test('findall - should pass', async () => {
  mockCtx.prisma.team.findMany.getMockImplementation();

  await expect(findAllTeam(ctx)).resolves.toEqual(Error('Team not found!'));
});

test('findone - should pass', async () => {
  const id = 'f5aec233-22da-474b-b17d-c05f5ff0a08b';

  await expect(findOneTeam(id, ctx)).resolves.toEqual(Error('Team not found!'));
});

test('update - should pass', async () => {
  const team = {
    idTeam: 'f5aec233-22da-474b-b17d-c05f5ff0a08b',
    nameTeam: 'Vila Nova',
    idHome: 'cca7e0fc-3ba4-4378-bcd7-99720a9e25ce',
  };
  mockCtx.prisma.team.update.mockResolvedValue(team);

  await expect(updateTeam(team, ctx)).resolves.toEqual({
    idTeam: 'f5aec233-22da-474b-b17d-c05f5ff0a08b',
    nameTeam: 'Vila Nova',
    idHome: 'cca7e0fc-3ba4-4378-bcd7-99720a9e25ce',
  });
});

test('deleted - should pass', async () => {
  const idTeam = 'f5aec233-22da-474b-b17d-c05f5ff0a08b';

  await expect(deleteTeam(idTeam, ctx)).resolves.toEqual('Ok!');
});

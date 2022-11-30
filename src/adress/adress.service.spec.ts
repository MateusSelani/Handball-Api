import { NotFoundException } from '@nestjs/common';
import { Context, createMockContext, MockContext } from '../context';
import { createAdress, updateAdress } from './tests/adress.dependencies';

let mockCtx: MockContext;
let ctx: Context;

beforeEach(() => {
  mockCtx = createMockContext();
  ctx = mockCtx as unknown as Context;
});

test('create - should pass', async () => {
  const adress = {
    idAdress: 'f5aec233-22da-474b-b17d-c05f5ff0a08b',
    street: 'street test',
  };
  mockCtx.prisma.adress.create.mockResolvedValue(adress);

  await expect(createAdress(adress, ctx)).resolves.toEqual({
    idAdress: 'f5aec233-22da-474b-b17d-c05f5ff0a08b',
    street: 'street test',
  });
});

test('invalid create - should fail', async () => {
  const udf = undefined;

  try {
    mockCtx.prisma.adress.create.mockRejectedValue(udf);
  } catch (error) {
    console.log(error)
    await expect(createAdress(error, ctx)).resolves.toBeInstanceOf(
      NotFoundException,
    );
  }
});

test('update - should pass', async () => {
  const adress = {
    idAdress: 'f5aec233-22da-474b-b17d-c05f5ff0a08b',
    street: 'new street',
  };
  mockCtx.prisma.adress.update.mockResolvedValue(adress);

  await expect(updateAdress(adress, ctx)).resolves.toEqual({
    idAdress: 'f5aec233-22da-474b-b17d-c05f5ff0a08b',
    street: 'new street',
  });
});

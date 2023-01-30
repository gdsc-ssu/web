import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  runtime: 'nodejs',
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const newTest = await prisma.test.create({
    data: {
      test: '1234',
      test2: '5678',
    },
  });

  res.status(200).json(newTest);
}

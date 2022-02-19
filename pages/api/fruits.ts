import type { NextApiRequest, NextApiResponse } from 'next';
import { FruitList } from '../../lib/types';
import { fruits } from '../../lib/data';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<FruitList>
) {
  if (req.method === 'GET') {
    res.status(200).json({ fruits });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

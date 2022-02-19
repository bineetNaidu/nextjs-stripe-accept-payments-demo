import type { NextApiRequest, NextApiResponse } from 'next';
import { FruitList } from '../../lib/types';

const fruits = [
  {
    title: 'Orange',
    img: 'https://nextui.org/images/fruit-1.jpeg',
    price: 5.5,
  },
  {
    title: 'Tangerine',
    img: 'https://nextui.org/images/fruit-2.jpeg',
    price: 3.0,
  },
  {
    title: 'Raspberry',
    img: 'https://nextui.org/images/fruit-3.jpeg',
    price: 10.0,
  },
  {
    title: 'Lemon',
    img: 'https://nextui.org/images/fruit-4.jpeg',
    price: 5.3,
  },
  {
    title: 'Advocato',
    img: 'https://nextui.org/images/fruit-5.jpeg',
    price: 15.7,
  },
  {
    title: 'Lemon 2',
    img: 'https://nextui.org/images/fruit-6.jpeg',
    price: 8.0,
  },
  {
    title: 'Banana',
    img: 'https://nextui.org/images/fruit-7.jpeg',
    price: 7.5,
  },
  {
    title: 'Watermelon',
    img: 'https://nextui.org/images/fruit-8.jpeg',
    price: 12.2,
  },
];

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

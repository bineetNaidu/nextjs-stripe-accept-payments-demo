import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { fruits } from '../../lib/data';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2020-08-27',
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      if (!req.body.fruitName) {
        throw new Error('Missing fruit Name');
      }
      const fruitName = req.body.fruitName;
      const fruit = fruits.find((f) => f.title === fruitName);
      if (!fruit) {
        throw new Error('Fruit not found');
      }
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            amount: fruit.price * 100,
            currency: 'INR',
            quantity: 1,
            images: [fruit.img],
            name: fruit.title,
            description: `Buying ${fruit.title} for ${fruit.price} INR`,
          },
        ],
        metadata: {},
        payment_intent_data: {
          description: `Bought ${fruit.title} for ${fruit.price} INR`,
          metadata: {
            product: 'FRUIT MARKET DEMO',
            fruit: fruit.title,
            price: fruit.price,
          },
        },
        mode: 'payment',
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });

      res.redirect(303, session.url!);
    } catch (err: any) {
      res.status(err.statusCode || 500).json({ error: err.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

import { FC } from 'react';
import { Grid, Card, Row, Text, Tooltip } from '@nextui-org/react';
import { Fruit } from '../lib/types';

interface FruitCardProps {
  fruit: Fruit;
}

export const FruitCard: FC<FruitCardProps> = ({ fruit }) => {
  // const handleBuy = () => {
  //   console.log('Buy clicked');
  //   fetch('/api/checkout_sessions', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       fruit,
  //     }),
  //   });
  // };
  return (
    <Grid xs={6} sm={3}>
      <form action="/api/checkout_sessions" method="POST">
        <Tooltip content={'Click to buy'} offset={45} color="secondary">
          <input
            type="text"
            name="fruitName"
            hidden
            value={fruit.title}
            readOnly
          />
          <Card hoverable clickable as="button" role="link">
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                objectFit="cover"
                src={fruit.img}
                width="250px"
                height={140}
                alt={fruit.title}
              />
            </Card.Body>
            <Card.Footer>
              <Row wrap="wrap" justify="space-between">
                <Text b>{fruit.title}</Text>
                <Text css={{ color: '$accents4', fontWeight: '$semibold' }}>
                  {fruit.price}
                </Text>
              </Row>
            </Card.Footer>
          </Card>
        </Tooltip>
      </form>
    </Grid>
  );
};

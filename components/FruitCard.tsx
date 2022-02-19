import { FC } from 'react';
import { Grid, Card, Row, Text, Tooltip } from '@nextui-org/react';
import { Fruit } from '../lib/types';

interface FruitCardProps {
  fruit: Fruit;
}

export const FruitCard: FC<FruitCardProps> = ({ fruit }) => {
  return (
    <Grid xs={6} sm={3}>
      <Tooltip content={'Click to buy'} offset={45} color="invert">
        <Card hoverable clickable>
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
    </Grid>
  );
};

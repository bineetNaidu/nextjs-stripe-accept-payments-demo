import { useEffect, useState } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { Grid, Card, Row, Text, Container } from '@nextui-org/react';
import { Fruit } from '../lib/types';

const Index: NextPage = () => {
  const [fruits, setFruits] = useState<Fruit[]>([]);

  useEffect(() => {
    fetch('/api/fruits')
      .then((res) => res.json())
      .then((data) => setFruits(data.fruits));
  }, []);

  return (
    <>
      <Head>
        <title>Fruit Market</title>
        <meta
          name="description"
          content="Fruit Market - Stripe Accepting Payment Demo by Bineet Naidu"
        />
        <meta
          name="keywords"
          content="stripe, payment, demo, bineetnaidu, stripe accepting payment"
        />
        <meta name="author" content="Bineet Naidu" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
      </Head>
      <Container css={{ my: '2rem' }}>
        <Text
          h1
          css={{
            textAlign: 'center',
            textGradient: '45deg, $yellow500 -20%, $red500 100%',
          }}
          weight="bold"
        >
          Your Fruit Market!
        </Text>
        <Grid.Container gap={2} justify="flex-start">
          {fruits.map((item, index) => (
            <Grid xs={6} sm={3} key={index}>
              <Card hoverable clickable>
                <Card.Body css={{ p: 0 }}>
                  <Card.Image
                    objectFit="cover"
                    src={item.img}
                    width="100%"
                    height={140}
                    alt={item.title}
                  />
                </Card.Body>
                <Card.Footer>
                  <Row wrap="wrap" justify="space-between">
                    <Text b>{item.title}</Text>
                    <Text css={{ color: '$accents4', fontWeight: '$semibold' }}>
                      {item.price}
                    </Text>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      </Container>
    </>
  );
};
export default Index;

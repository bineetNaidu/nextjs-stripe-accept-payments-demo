import { useEffect, useState } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { Grid, Text, Container } from '@nextui-org/react';
import { Fruit } from '../lib/types';
import { FruitCard } from '../components/FruitCard';

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
            <FruitCard key={item.title} fruit={item} />
          ))}
        </Grid.Container>
      </Container>
    </>
  );
};
export default Index;

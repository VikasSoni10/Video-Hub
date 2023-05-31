import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Img1 from '../assets/1.jpg';
import Img2 from '../assets/2.jpg';
import Img3 from '../assets/3.jpg';
import Img4 from '../assets/4.jpg';
import Img5 from '../assets/5.png';

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          borderBottom={'2px solid'}
          w={'fit-content'}
          m={'auto'}
        >
          Services
        </Heading>
        <Stack
          alignItems={'center'}
          h={'full'}
          p={'4'}
          direction={['column', 'row']}
        >
          <Image src={Img5} filter={'hue-rotate(-130deg)'} h={['40', '300']} />
          <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'}>
          Welcome to our Video Hub App, where entertainment knows no boundaries! Our comprehensive range of services is designed to cater to all your entertainment needs, delivering an immersive and captivating experience like never before. Whether you're a movie enthusiast, a TV series addict, or a fan of captivating documentaries, our Video Hub App has got you covered. With our extensive library of content from around the globe, you'll have access to an array of movies, TV shows, documentaries, and more, all at your fingertips. Stay up to date with the latest releases, explore a diverse selection of genres, and indulge in binge-worthy marathons. Our user-friendly interface ensures seamless navigation, allowing you to easily discover, stream, and personalize your entertainment journey. Get ready to embark on an unforgettable entertainment adventure with our unparalleled Video Hub App services.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => {
  const headingOptions = {
    pos: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    textTransform: 'uppercase',
    p: '4',
    size: '2xl',
  };

  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={1000}
      showArrows={false}
      showStatus={false}
      showThumbs={false}
    >
      <Box w="full" h={'100vh'}>
        <Image src={Img1} h={'full'} w={'full'} objectFit={'cover'}/>
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Visualize the future
        </Heading>
      </Box>
      <Box w="full" h={'100vh'}>
        <Image src={Img2} h={'full'} w={'full'} objectFit={'cover'}/>
        <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
          future is Gaming
        </Heading>
      </Box>
      <Box w="full" h={'100vh'}>
        <Image src={Img3} h={'full'} w={'full'} objectFit={'cover'} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          Gaming on console
        </Heading>
      </Box>
      <Box w="full" h={'100vh'}>
        <Image src={Img4} h={'full'} w={'full'} objectFit={'cover'}/>
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          Night life is cool
        </Heading>
      </Box>
    </Carousel>
  );
};

export default Home;

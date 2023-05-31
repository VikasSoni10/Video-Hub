import {
  Avatar,
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container h={'100vh'} maxW={'container.xl'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          margin={'auto'}
          my={'16'}
        >
          <Heading>VIDEO HUB</Heading>
          <Avatar alignSelf={'center'} boxSize={'24'}/>
          <Input
            type="text"
            placeholder="Name"
            focusBorderColor={'purple.500'}
            required
          />
          <Input
            type="email"
            placeholder="Email"
            focusBorderColor={'purple.500'}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            focusBorderColor={'purple.500'}
            required
          />
          
          <Button type="submit" colorScheme="purple">
            Sign Up
          </Button>
          <Text textAlign={'right'}>
            Already a user? <Button colorScheme='purple' variant={'link'}>
            <Link to={'/login'}>Log In</Link>
          </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;

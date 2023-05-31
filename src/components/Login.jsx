import {
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
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
          <Heading>Welcome Back</Heading>
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
          <Button alignSelf={'flex-end'} variant={'link'}>
            <Link to={'/forgotpassword'}>Forgot password?</Link>
          </Button>
          <Button type="submit" colorScheme="purple">
            Log In
          </Button>
          <Text textAlign={'right'}>
            New user? <Button colorScheme='purple' variant={'link'}>
            <Link to={'/signup'}>Sign Up</Link>
          </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;

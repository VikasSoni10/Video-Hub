import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading size={'md'} textTransform={'uppercase'} textAlign={['center', 'left']}>
            Subscribe to Get updates
          </Heading>
          <HStack borderBottom={'2px Solid white'} py={'2'}>
            <Input
              placeholder="Enter Your Email..."
              border={'none'}
              outline={'none'}
              focusBorderColor="none"
              borderRadius={'none'}
            />
            <Button
              p={'0'}
              colorScheme="purple"
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={'20'} />
            </Button>
          </HStack>
        </VStack>
        <VStack w={'full'} px={'4'} borderLeft={['none', '1px solid white']} >
          <Heading  textTransform={'uppercase'} textAlign={'center'}>
            Video Hub
          </Heading>
          <Text>All Rights Reserved</Text>
        </VStack>
        <VStack w={'full'} px={'4'} borderLeft={['none', '1px solid white']}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme={'whiteAplha'}>
            <a  target='blank' href='https://github.com/VikasSoni10'>Github</a>
          </Button>
          <Button variant={'link'} colorScheme={'whiteAplha'}>
            <a target='blank' href='https://linkedin.com/in/vikas-soni142/'>LinkedIn</a>
          </Button>
          <Button variant={'link'} colorScheme={'whiteAplha'}>
            <a target='blank' href='https://twitter.com/'>Twitter</a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;

import { Button, Container, Input, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';

const Upload = () => {
  return (
    <Container h={'100vh'} maxW={'container.xl'} p={['0' ,'16']}>
      <VStack color={'purple.500'} h={'full'} justifyContent={'center'}>
        <AiOutlineCloudUpload size={'10vmax'} />

        <form>
          <Stack direction={['column', 'row']}>
            <Input
              type={'file'}
              required
              css={{
                '&::file-selector-button': {
                  color: 'purple',
                  height: '100%',
                  width: 'calc(100% + 36px)',
                  marginLeft: '-18px',
                  border: 'none',
                  cursor:'pointer'
                }
              }}
            />
            <Button type="submit" colorScheme='purple'>Upload</Button>
          </Stack>
        </form>
      </VStack>
    </Container>
  );
};

export default Upload;

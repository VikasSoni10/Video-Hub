import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const Videos = () => {

  const videos = [
    "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
  ]

  const [videoSrc, setVideoSrc] = useState(videos[0]);
  const [id, setId] = useState(1); 
  
  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'} >
        <video
          controls
          controlsList="nodownload"
          src={videoSrc}
          style={{ width: '100%' }}
        ></video>

        <VStack overflowY={'auto'} alignItems={'flex-start'} p={'6'} w={'full'}>
          <Heading>Sample Video {id}</Heading>
          <Text>This is a sample video. I hope you guys like it. Do not forgot to share your friends via social media plateforms.</Text>
        </VStack>

      </VStack>
      <VStack w={['full', 'xl']}  alignItems={'stretch'} p={'8'} overflowY={'auto'} spacing={'8'}>
      {
        videos.map((item, index)=>(
            <Button key={index} variant={'ghost'} colorScheme='purple' onClick={()=>{setVideoSrc(item); setId(index+1);}}> Video {index + 1}</Button>
        ))
      }
      </VStack>
    </Stack>
  );
};

export default Videos;

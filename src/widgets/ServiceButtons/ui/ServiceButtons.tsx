import { Center, Grid } from '@chakra-ui/react';
import { ReconnectDeviceButton } from 'features/ReconnectDeviceButton';
import { SendConfigButton } from 'features/SendConfigButton';
import { memo } from 'react';

export const ServiceButtons = memo(() => {
  return (
    <Grid
      templateRows="2fr 1fr"
      w="full"
      h="full"
      gap='5px'
      boxSizing="border-box"
    >
      <Center gridRow={1} w="100%" h="full">
        <SendConfigButton >Загрузить новую конфигурацию</SendConfigButton>
      </Center>
      <Center gridRow={2} w='100%'>
        <ReconnectDeviceButton>
          Переподключение к устройству
        </ReconnectDeviceButton>
      </Center>
    </Grid>
  );
});

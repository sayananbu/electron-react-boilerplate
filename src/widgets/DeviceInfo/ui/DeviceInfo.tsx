import { Center, Flex } from '@chakra-ui/react';
import { memo } from 'react';
import { LabelValue } from 'shared/LabelValue';

export const DeviceInfo = memo(() => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="space-evenly"
      w="full"
      h="full"
    >
      <LabelValue label="Код вх.сигнала" value="0" />
      <LabelValue label="Значение" value="0" />
      <LabelValue label="Статус узла" value="0" />
      <Flex justifyContent="center">
        <Center>
          <LabelValue label="Hw" value="0" />
        </Center>
        <Center>
          <LabelValue label="Sw" value="0" />
        </Center>
      </Flex>
    </Flex>
  );
});

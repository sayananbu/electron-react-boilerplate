import { Flex } from '@chakra-ui/react';
import React, { memo } from 'react';
import { LabelValue } from 'shared/LabelValue';

export const DeviceState = memo(() => {
  return (
    <Flex flexDirection="column" justifyContent='space-evenly' w='full' h='full' >
      <LabelValue label="Исправность" value="0" />
      <LabelValue label="Проверка" value="0" />
      <LabelValue label="Блокировка" value="0" />
      <LabelValue label="Выход за нижний предел" value="0" />
      <LabelValue label="Выход за верхний предел" value="0" />
    </Flex>
  );
});

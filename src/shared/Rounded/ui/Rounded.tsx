import { FC, memo } from 'react';
import { RoundedProps } from '../model/types';
import { Center } from '@chakra-ui/react';

export const Rounded: FC<RoundedProps> = memo(({ children, column, row }) => {
  return (
    <Center
      gridRow={row}
      gridColumn={column}
      borderRadius="15px"
      border="1px solid #000"
      w="full"
      overflow='hidden'
      padding='5px'
      bg='bg.main'
    >
      {children}
    </Center>
  );
});

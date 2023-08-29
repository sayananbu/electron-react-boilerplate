import { FC } from 'react';
import { ItemProps } from '../model/types';
import { Radio } from '@chakra-ui/react';

export const Item: FC<ItemProps> = ({ label }) => {
  return (
    <Radio ps="5px" value={label}>
      {label}
    </Radio>
  );
};

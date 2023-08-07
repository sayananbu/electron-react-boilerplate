import { Button } from '@chakra-ui/react';
import React, { FC, memo } from 'react';
import { SendConfigButtonProps } from '../model/types';

export const SendConfigButton: FC<SendConfigButtonProps> = memo(
  ({ children }) => {
    return <Button variant="success">{children}</Button>;
  }
);

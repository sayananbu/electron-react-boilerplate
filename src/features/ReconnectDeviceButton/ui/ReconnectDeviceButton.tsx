import React, { FC, memo } from 'react';
import { ReconnectDeviceButtonProps } from '../model/types';
import { Button } from '@chakra-ui/react';

export const ReconnectDeviceButton: FC<ReconnectDeviceButtonProps> = memo(
  ({ children }) => {
    return (
      <Button variant="error" boxSizing="border-box" >
        {children}
      </Button>
    );
  }
);

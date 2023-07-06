import React, { memo } from 'react';
import { SUploadReconnectContainer } from './styles/uploadreconnect';
import Button from '@mui/material/Button';

const UploadReconnectFragment = () => {
  return (
    <SUploadReconnectContainer>
      <Button
        variant="contained"
        color="success"
        sx={{
          height: '70%',
        }}
      >
        Загрузить конфигурацию
      </Button>
      <Button
        variant="contained"
        color="error"
        sx={{
          height: '30%',
        }}
      >
        Переподключиться
      </Button>
    </SUploadReconnectContainer>
  );
};

export default memo(UploadReconnectFragment);

import React, { memo } from 'react';
import { SFileActionsFragment } from './styles/fileactionsstyles';
import Button from '@mui/material/Button';

const FileActionsFragment = () => {
  return (
    <SFileActionsFragment>
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#fff',
          color: '#000',
        }}
      >
        Изменить файл конфигурации
      </Button>
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#fff',
          color: '#000',
        }}
      >
        Открыть файл конфигурации
      </Button>
    </SFileActionsFragment>
  );
};

export default memo(FileActionsFragment);

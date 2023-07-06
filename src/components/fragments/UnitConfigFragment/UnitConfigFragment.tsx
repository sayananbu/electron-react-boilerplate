import { memo } from 'react';
import { SConfigLabel, SUnitConfigFragment } from './styles/unitconfigstyles';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

const UnitConfigFragment = () => {
  return (
    <SUnitConfigFragment>
      <Stack direction="row" spacing={1} alignItems="baseline">
        <SConfigLabel>NODE ID узла:</SConfigLabel>
        <TextField
          id="outlined-basic"
          label="ID"
          variant="outlined"
          size="small"
        />
      </Stack>
      <Stack
        direction="row"
        spacing={0.5}
        alignItems="center"
      >
        <SConfigLabel>Диапазон вх. сигнала:</SConfigLabel>
        <TextField
          id="outlined-basic"
          label="From"
          variant="outlined"
          size="small"
        />
        <TextField
          id="outlined-basic"
          label="To"
          variant="outlined"
          size="small"
        />
      </Stack>
      <Stack direction="row" spacing={1} alignItems="baseline">
        <SConfigLabel>Усреднение:</SConfigLabel>
        <TextField
          id="outlined-basic"
          label="Мс"
          variant="outlined"
          size="small"
        />
      </Stack>
    </SUnitConfigFragment>
  );
};

export default memo(UnitConfigFragment);

import { Checkbox, Grid, NumberInput, NumberInputField, Text } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { SettingConfigProps } from '../model/types';

export const SettingConfig: FC<SettingConfigProps> = memo(({ label, row }) => {
  return (
    <Grid
      templateColumns="repeat(5,2fr)"
      gridRow={row}
      textAlign="center"
      placeItems="center"
      w="full"
    >
      <Text gridColumn={1}>{label}</Text>
      <NumberInput defaultValue={0} min={0} gridColumn={2} p='5px'>
        <NumberInputField
          bg="elems.primary"
          border="1px solid #000"
          textAlign="center"
          px="2px"
        />
      </NumberInput>
      <NumberInput defaultValue={0} min={0} gridColumn={3} p='5px'>
        <NumberInputField
          bg="elems.primary"
          border="1px solid #000"
          textAlign="center"
          px="2px"
        />
      </NumberInput>
      <Checkbox gridColumn={4} size='xl' />
      <Checkbox gridColumn={5} defaultChecked size='xl' />
    </Grid>
  );
});

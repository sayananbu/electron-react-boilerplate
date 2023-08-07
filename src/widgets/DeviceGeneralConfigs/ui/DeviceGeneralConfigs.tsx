import {
  Center,
  Grid,
  NumberInput,
  NumberInputField,
  Stack,
  Text,
} from '@chakra-ui/react';
import { memo } from 'react';
import { LabeledInputs } from 'shared/LabeledInputs';

export const DeviceGeneralConfigs = memo(() => {
  return (
    <Stack>
      <LabeledInputs>NodeID узла</LabeledInputs>
      <Grid templateColumns="2fr 3fr">
        <Center alignItems="center" gridColumn={1} w="full" textAlign="center">
          <Text>Диапазон вх.сигнала</Text>
        </Center>
        <Stack direction="row" gridColumn={2}>
          <NumberInput defaultValue={0} min={0}>
            <NumberInputField
              bg="elems.primary"
              border="1px solid #000"
              textAlign="center"
              px="2px"
            />
          </NumberInput>
          <NumberInput defaultValue={0} min={0}>
            <NumberInputField
              bg="elems.primary"
              border="1px solid #000"
              textAlign="center"
              px="2px"
            />
          </NumberInput>
        </Stack>
      </Grid>
      <LabeledInputs>Усреднение, мс</LabeledInputs>
    </Stack>
  );
});

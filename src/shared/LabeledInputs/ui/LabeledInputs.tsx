import { FC, memo } from 'react';
import { LabeledInputsProps } from '../model/types';
import {
  Grid,
  Center,
  Text,
  NumberInput,
  NumberInputField,
} from '@chakra-ui/react';

export const LabeledInputs: FC<LabeledInputsProps> = memo(({ children }) => {
  return (
    <Grid templateColumns="2fr 3fr">
      <Center gridColumn={1} w="full" textAlign='center'>
        <Text>{children}</Text>
      </Center>
      <NumberInput gridColumn={2} defaultValue={0} >
        <NumberInputField bg="elems.primary" border="1px solid #000" px='2px' textAlign='center'/>
      </NumberInput>
    </Grid>
  );
});

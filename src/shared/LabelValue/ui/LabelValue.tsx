import { FC, memo } from 'react';
import { LabelValueProps } from '../model/types';
import { Grid, Text } from '@chakra-ui/react';

export const LabelValue: FC<LabelValueProps> = memo(({ label, value }) => {
  return (
    <Grid templateColumns="70% 30%" w="full" m='2px'>
      <Grid column={1} verticalAlign="center">
        <Text textAlign="right">{label}:</Text>
      </Grid>
      <Grid column={2} placeItems="center" minW='50px'>
        <Text>{value}</Text>
      </Grid>
    </Grid>
  );
});

import { Grid, RadioGroup, Stack, Text } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { ItemsSelectorProp } from '../model/types';
import { Item } from 'shared/Item';

export const ItemsSelector: FC<ItemsSelectorProp> = memo(
  ({ label, itemsList }) => {
    return (
      <Grid templateRows="20px auto" w="100%" h="100%">
        <Text gridRow={1} fontSize="16px">
          {label}
        </Text>
        <RadioGroup gridRow={2}>
          <Stack
            w="100%"
            h="100%"
            borderRadius="10px"
            bg="elems.primary"
            overflow="auto"
            spacing={0}
          >
            {itemsList?.map((val) => (
              <Item key={val} label={val} />
            ))}
          </Stack>
        </RadioGroup>
      </Grid>
    );
  }
);

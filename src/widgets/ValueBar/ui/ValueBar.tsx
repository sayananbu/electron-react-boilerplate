import {
  Center,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderTrack,
} from '@chakra-ui/react';
import { FC, memo } from 'react';
import { ValueBarProps } from '../model/types';

export const ValueBar: FC<ValueBarProps> = memo(({ max, min, value }) => {
  const valueStyles = {
    top: {
      ms: '25px',
      mb: '-20px',
    },
    bottom: {
      ms: '25px',
      mb: '-3px',
    },
  };
  const labelStyles = {
    top: {
      mb: '-20px',
      ms: '-65px',
    },
    bottom: {
      mb: '-3px',
      ms: '-65px',
    },
  };
  return (
    <Center flexDirection='column' w='full' h='full'>
      <Slider
        value={value}
        orientation="vertical"
        max={max}
        min={min}
        h="98%"
        cursor="default"
      >
        <SliderMark value={max} {...valueStyles.top}>
          {max}
        </SliderMark>
        <SliderMark value={max} {...labelStyles.top}>
          Max:
        </SliderMark>
        <SliderMark value={min} {...valueStyles.bottom}>
          {min}
        </SliderMark>
        <SliderMark value={min} {...labelStyles.bottom}>
          Min:
        </SliderMark>
        <SliderTrack w="40px" borderRadius="3px" bg="rgba(8,8,8,.2)">
          <SliderFilledTrack bg="elems.success" />
        </SliderTrack>
      </Slider>
    </Center>
  );
});

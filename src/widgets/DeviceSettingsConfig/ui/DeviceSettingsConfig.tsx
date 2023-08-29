import { Button, Grid, Image, Text } from '@chakra-ui/react';
import { memo } from 'react';
import { SettingConfig } from 'shared/SettingConfig';
import resetBtn from '../../../shared/assets/icons/resetBtn.png';

export const DeviceSettingsConfig = memo(() => {
  return (
    <Grid templateRows="repeat(5, 2fr)" w="100%" h="full">
      <Grid
        templateColumns="repeat(5,2fr)"
        gridRow={1}
        textAlign="center"
        placeItems="center"
        w="full"
      >
        <Button gridColumn={1} w="fit-contant">
          <Image src={resetBtn} w="full" h="full" transform="scale(.9)" />
        </Button>
        <Text gridColumn={2}>Setpoins value</Text>
        <Text gridColumn={3}>Histeresis, %</Text>
        <Text gridColumn={4}>Existence</Text>
        <Text gridColumn={5}>Setpoin adjuster</Text>
      </Grid>
      <SettingConfig row={2} label="EMR↑" />
      <SettingConfig row={3} label="WRN↑" />
      <SettingConfig row={4} label="WRN↓" />
      <SettingConfig row={5} label="EMR↓" />
    </Grid>
  );
});

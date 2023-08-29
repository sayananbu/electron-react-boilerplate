import { Grid } from '@chakra-ui/react';
import { DeviceInfo } from 'widgets/DeviceInfo';
import { DeviceState } from 'widgets/DeviceState';
import { Rounded } from 'shared/Rounded';
import { ValueBar } from 'widgets/ValueBar';
import { memo } from 'react';
import { ServiceButtons } from 'widgets/ServiceButtons';
import { DeviceGeneralConfigs } from 'widgets/DeviceGeneralConfigs';
import { ItemsSelector } from 'widgets/ItemsSelector';
import { channels, settings } from '../model/mock';
import { DeviceSettingsConfig } from 'widgets/DeviceSettingsConfig';

export const MainPage = memo(() => {
  return (
    <Grid
      templateColumns="2fr 4fr 4fr 2fr"
      templateRows="2.5fr 5fr 2.5fr"
      w="full"
      h="100vh"
      fontSize="18px"
      gap="5px"
      p="5px"
    >
      <Rounded row="1" column="2">
        <DeviceState />
      </Rounded>
      <Rounded row="3" column="1">
        <DeviceInfo />
      </Rounded>
      <Rounded row="1 / span 2" column="1">
        <ValueBar max={10000} min={0} value={6000} />
      </Rounded>
      <Rounded row="3" column="3">
        <ServiceButtons />
      </Rounded>
      <Rounded row="1" column="3">
        <DeviceGeneralConfigs />
      </Rounded>
      <Rounded row="1" column="4">
        <ItemsSelector label='Select Channel' itemsList={channels}/>
      </Rounded>
      <Rounded row="2" column="4">
        <ItemsSelector label='Select Setting' itemsList={settings}/>
      </Rounded>
      <Rounded row="2" column="span 2">
        <DeviceSettingsConfig />
      </Rounded>
    </Grid>
  );
});

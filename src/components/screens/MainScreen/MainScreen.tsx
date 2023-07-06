import { FC, memo, useEffect } from 'react';
import ProgressFragment from 'components/fragments/ProgressFragment/ProgressFragment';
import { SMainScreen } from './styles/mainscreenstyles';
import GeneralInfoFragment from 'components/fragments/GeneralInfoFragment/GeneralInfo';
import ServiceAbillityFragment from 'components/fragments/ServiceAbillityFragment/ServiceAbillityFragment';
import UnitConfigFragment from 'components/fragments/UnitConfigFragment/UnitConfigFragment';
import UploadReconnectFragment from 'components/fragments/UploadReconnectFragment/UploadReconnectFragment';
import FileActionsFragment from 'components/fragments/FileActionsFragment/FileActionsFragment';

const MainScreen: FC = () => {
  useEffect(() => {
    document.title = 'PPH-153P Configurator';
  }, []);
  return (
    <SMainScreen>
      <ProgressFragment />
      <GeneralInfoFragment />
      <ServiceAbillityFragment />
      <UnitConfigFragment />
      <UploadReconnectFragment />
      <FileActionsFragment />
    </SMainScreen>
  );
};

export default memo(MainScreen);

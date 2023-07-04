import { FC, memo, useEffect } from 'react';
import { SMainScreen } from './styles/mainscreenstyles';
import ProgressFragment from 'components/fragments/ProgressFragment/ProgressFragment';

type MainScreenProps = {};
const MainScreen: FC<MainScreenProps> = () => {
  useEffect(()=>{
    document.title="PPH-153P Configurator"
  },[])
  return (
    <SMainScreen>
      <ProgressFragment />
    </SMainScreen>
  );
};

export default memo(MainScreen);

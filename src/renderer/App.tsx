import MainScreen from 'components/screens/MainScreen/MainScreen';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ConfigScreen from 'components/screens/ConfigScreen/ConfigScreen';
import { FC, memo } from 'react';
import { SApp } from './AppStyles';

const App: FC = () => {
  return (
    <SApp>
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/config" element={<ConfigScreen />} />
        </Routes>
      </MemoryRouter>
    </SApp>
  );
};

export default memo(App);

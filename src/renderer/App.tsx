import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { FC, memo } from 'react';
import { ConfigPage } from 'pages/ConfigPage';
import { MainPage } from 'pages/MainPage';
import { Center, ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme';
import { Provider } from 'react-redux';
import { store } from 'entities/store';

const App: FC = () => {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Center
          minW="100vw"
          minH="100vh"
          backgroundColor="#ffdea0"
          m={0}
          p={0}
          boxSizing="border-box"
        >
          <MemoryRouter initialEntries={['/']}>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/config" element={<ConfigPage />} />
            </Routes>
          </MemoryRouter>
        </Center>
      </ChakraProvider>
    </Provider>
  );
};

export default memo(App);

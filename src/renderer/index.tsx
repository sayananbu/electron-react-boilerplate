import { createRoot } from 'react-dom/client';
import App from './App';
import 'normalize.css';
import GlobalStyles from './GlobalStyles';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <>
    <App />
    <GlobalStyles />
  </>
);

// calling IPC exposed from preload script
window.electron.ipcRenderer.once('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});
window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);

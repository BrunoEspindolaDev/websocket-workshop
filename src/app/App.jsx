import { useEffect } from 'react';
import appStore from './App.store';
import { SERVER_URL } from '@/constants';
import { ThemeProvider } from '@/components/theme-provider';
import Chat from '@/pages/Chat';

const webSocketInstance = new WebSocket(SERVER_URL);

const App = () => {
  const ws = appStore(({ ws }) => ws);
  const setWs = appStore(({ setWs }) => setWs);

  useEffect(() => {
    setWs(webSocketInstance);
  }, [ws, setWs]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Chat />
    </ThemeProvider>
  );
};

export default App;

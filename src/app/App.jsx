import Chat from '@/pages/Chat';
import { ThemeProvider } from "@/components/theme-provider"
 
const App = () => {
  return (
   <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
     <Chat />
  </ThemeProvider>
  );
};

export default App;

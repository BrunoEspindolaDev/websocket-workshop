import { Button } from '@/components/ui/button';

const ChatNavbar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2 text-white font-bold">
      <h1>WebSockets</h1>
      <Button
        variant="outline"
        className="border-white cursor-pointer font-bold">
        Menu
      </Button>
    </div>
  );
};

export default ChatNavbar;

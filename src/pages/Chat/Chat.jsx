import ChatBar from './ChatBar';
import ChatNavbar from './ChatNavbar';
import ChatMessages from './ChatMessages';
import ChatUserDialog from './ChatUserDialog';

const Chat = () => {
  return (
    <div className="flex flex-col h-screen max-w-[600px] mx-auto shadow-lg">
      <ChatNavbar />
      <ChatMessages />
      <ChatBar />
      <ChatUserDialog />
    </div>
  );
};

export default Chat;

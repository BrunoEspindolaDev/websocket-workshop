import chatStore from './Chat.store';
import ChatMessagesItem from './ChatMessagesItem';

const ChatMessages = () => {
  const messages = chatStore(({ messages }) => messages);

  if (!messages) {
    return null;
  }

  return (
    <div className="flex-1 overflow-y-auto px-4 space-y-3">
      {messages.map((message, index) => (
        <ChatMessagesItem key={index} message={message} />
      ))}
    </div>
  );
};

export default ChatMessages;

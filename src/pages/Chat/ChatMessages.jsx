import ChatMessagesItem from './ChatMessagesItem';

const ChatMessages = ({ messages }) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-3">
      {messages.map((message, index) => (
        <ChatMessagesItem key={index} message={message} />
      ))}
    </div>
  );
};

export default ChatMessages;

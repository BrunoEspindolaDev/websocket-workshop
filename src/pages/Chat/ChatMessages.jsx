const ChatMessages = ({ messages }) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-3">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`p-3 rounded-lg max-w-[75%] ${
            msg.sender === 'user' ? 'ml-auto bg-orange-500' : 'bg-neutral-50/10'
          } text-white`}>
          {msg.text}
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;

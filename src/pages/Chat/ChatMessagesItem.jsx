const ChatMessagesItem = ({ message }) => {
  const isSender = message.sender === 'user';

  return (
    <div
      className={`p-3 rounded-lg max-w-[75%] ${
        isSender ? 'ml-auto bg-white text-black' : 'bg-neutral-50/10 text-white'
      } `}>
      {message.text}
    </div>
  );
};

export default ChatMessagesItem;

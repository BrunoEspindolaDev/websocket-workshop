import dayjs from 'dayjs';
import chatStore from './Chat.store';

const ChatMessagesItem = ({ message }) => {
  const username = chatStore(state => state.username);

  const isSender = message.sender === username;

  return (
    <div
      className={`flex flex-col p-3 rounded-lg max-w-[75%] ${
        isSender ? 'ml-auto bg-white text-black' : 'bg-neutral-50/10 text-white'
      } `}>
      <div
        className={`flex align-middle justify-between ${
          isSender ? ' text-black/70' : ' text-white/50'
        }`}>
        <span className={`text-[11px] font-medium`}>{message.sender}</span>
        <span className={`text-[11px] font-medium`}>
          {dayjs(message.date).format('DD/MM/YYYY - HH:mm')}
        </span>
      </div>
      <span className="text-sm">{message.text}</span>
    </div>
  );
};

export default ChatMessagesItem;

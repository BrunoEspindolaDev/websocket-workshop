import dayjs from 'dayjs';
import appStore from '@/app/App.store';

const ChatMessagesItem = ({ message }) => {
  const username = appStore(state => state.username);

  const isSender = message.sender === username;

  return (
    <div
      className={`flex flex-col p-3 rounded-lg max-w-[75%] text-white ${
        isSender ? 'ml-auto' : ''
      } `}
      style={{ backgroundColor: message.bg }}>
      <div className={`flex align-middle justify-between text-white`}>
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

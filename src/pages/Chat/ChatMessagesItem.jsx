import dayjs from 'dayjs';
import appStore from '@/app/App.store';
import { motion } from 'framer-motion';

const MotionDiv = motion.div;

const ChatMessagesItem = ({ message }) => {
  const username = appStore(state => state.username);

  const isSender = message.sender === username;

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
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
    </MotionDiv>
  );
};

export default ChatMessagesItem;

import { useEffect } from 'react';
import chatStore from './Chat.store';
import ChatMessagesItem from './ChatMessagesItem';
import appStore from '@/app/App.store';
import { transformMessage } from '@/utils';

const ChatMessages = () => {
  const ws = appStore(({ ws }) => ws);

  const messages = chatStore(({ messages }) => messages);
  const setMessage = chatStore(({ setMessage }) => setMessage);

  useEffect(() => {
    if (ws) {
      ws.onmessage = event => setMessage(transformMessage(event.data));
    }
  }, [ws]);

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

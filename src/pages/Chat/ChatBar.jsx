import { isEmpty } from 'lodash';
import appStore from '@/app/App.store';
import { useMemo, useState } from 'react';
import { createMessage } from '@/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const ChatBar = () => {
  const ws = appStore(({ ws }) => ws);
  const username = appStore(({ username }) => username);
  const usercolor = appStore(({ usercolor }) => usercolor);

  const [value, setValue] = useState('');

  const hasMessage = useMemo(() => !isEmpty(value.trim()), [value]);

  const handleSendMessage = () => {
    if (hasMessage) {
      const message = createMessage(username, usercolor, value);
      const messageJSON = JSON.stringify(message);

      ws.send(messageJSON);
      setValue('');
    }
  };

  return (
    <div className="flex items-center p-3">
      <Input
        value={value}
        placeholder="Digite sua mensagem..."
        onChange={e => setValue(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && handleSendMessage()}
        className="h-[50px] font-small rounded-4 pl-3"
      />
      <Button
        className="h-[50px] ml-2 cursor-pointer font-bold rounded-4"
        disabled={!hasMessage}
        onClick={handleSendMessage}>
        Enviar
      </Button>
    </div>
  );
};

export default ChatBar;

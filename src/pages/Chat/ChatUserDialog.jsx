import { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import chatStore from './Chat.store';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogFooter,
  DialogContent
} from '@/components/ui/dialog';

const ChatUserDialog = () => {
  const username = chatStore(state => state.username);
  const setUsername = chatStore(state => state.setUsername);
  const updateMock = chatStore(state => state.updateMock);

  const [value, setValue] = useState('');

  const hasUsername = !isEmpty(value?.trim());

  const handleSave = () => {
    if (!hasUsername) return;
    setUsername(value);
  };

  useEffect(() => {
    if (username) {
      updateMock(username);
    }
  }, [username, updateMock]);

  return (
    <Dialog open={!username}>
      <DialogContent className="w-100">
        <DialogHeader>
          <DialogTitle>Defina seu Username</DialogTitle>
        </DialogHeader>
        <Input
          value={value}
          placeholder="Digite o username..."
          onChange={e => setValue(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSave()}
        />
        <DialogFooter>
          <Button
            className="w-full cursor-pointer"
            disabled={!hasUsername}
            onClick={handleSave}>
            Salvar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ChatUserDialog;
